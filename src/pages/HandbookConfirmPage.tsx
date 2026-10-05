import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SITE_ORIGIN } from '../data/content'

type Status = 'working' | 'done' | 'again' | 'error'

export function HandbookConfirmPage() {
  const [params] = useSearchParams()
  const token = params.get('token') || ''
  const [status, setStatus] = useState<Status>('working')
  const [message, setMessage] = useState('Confirming your email…')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('This confirmation link is missing a token.')
      return
    }

    let active = true

    const endpoints = [
      '/api/handbook-confirm',
      `${SITE_ORIGIN}/api/handbook-confirm`,
    ]

    ;(async () => {
      let lastError = 'This confirmation link could not be used.'

      for (const url of endpoints) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          })
          const data = (await response.json().catch(() => null)) as {
            ok?: boolean
            already?: boolean
            error?: string
            title?: string
          } | null

          if (!active) return

          if (response.ok && data?.ok) {
            setStatus(data.already ? 'again' : 'done')
            setMessage(
              data.already
                ? 'This email is already confirmed. We have your handbook request.'
                : `Email confirmed. We will send ${data.title || 'the handbook'} to you.`,
            )
            return
          }

          if (data?.error) lastError = data.error
          if (response.status >= 400 && response.status < 500 && response.status !== 404) {
            setStatus('error')
            setMessage(lastError)
            return
          }
        } catch {
          // try next endpoint
        }
      }

      if (active) {
        setStatus('error')
        setMessage(lastError)
      }
    })()

    return () => {
      active = false
    }
  }, [token])

  return (
    <section className="section-block bg-white">
      <Container>
        <div className="handbook-confirm">
          <p className="handbook-confirm__kicker">Handbook</p>
          <h1 className="handbook-confirm__title">
            {status === 'error' ? 'Link not confirmed' : 'Request update'}
          </h1>
          <p
            className={
              status === 'error'
                ? 'handbook-confirm__message handbook-confirm__message--error'
                : 'handbook-confirm__message'
            }
          >
            {message}
          </p>
          <Link to="/#handbook" className="handbook-confirm__back">
            Back to handbooks
          </Link>
        </div>
      </Container>
    </section>
  )
}
