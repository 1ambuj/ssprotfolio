import { useEffect, useId, useState } from 'react'
import { X } from 'lucide-react'
import { submitHandbookRequest } from '../../lib/handbookRequest'

type HandbookRequestModalProps = {
  open: boolean
  handbookId: string
  title: string
  onClose: () => void
}

const EMPTY = { name: '', email: '', mobile: '' }

export function HandbookRequestModal({
  open,
  handbookId,
  title,
  onClose,
}: HandbookRequestModalProps) {
  const titleId = useId()
  const [form, setForm] = useState(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return

    setForm(EMPTY)
    setError('')
    setSent(false)
    setSubmitting(false)

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !submitting) onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose, submitting])

  if (!open) return null

  const close = () => {
    if (submitting) return
    onClose()
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    const result = await submitHandbookRequest({
      handbookId,
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      confirmOrigin: window.location.origin,
    })

    setSubmitting(false)

    if (!result.ok) {
      setError(result.error)
      return
    }

    setSent(true)
  }

  return (
    <div className="handbook-modal" onClick={close} role="presentation">
      <div
        className="handbook-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="handbook-modal__close"
          onClick={close}
          aria-label="Close"
          disabled={submitting}
        >
          <X size={18} />
        </button>

        <p className="handbook-modal__kicker">Request access</p>
        <h3 id={titleId} className="handbook-modal__title">
          {title}
        </h3>

        {sent ? (
          <p className="handbook-modal__success">
            Check your email and open the confirmation link. We send the request
            only after you confirm (link expires in 15 minutes).
          </p>
        ) : (
          <form className="handbook-modal__form" onSubmit={onSubmit}>
            <p className="handbook-modal__lead">
              Enter your details. You will receive a confirmation email — after
              you confirm, we will send the handbook.
            </p>

            <label className="handbook-modal__field">
              Name
              <input
                value={form.name}
                onChange={(e) => setForm((c) => ({ ...c, name: e.target.value }))}
                autoComplete="name"
                required
                disabled={submitting}
              />
            </label>

            <label className="handbook-modal__field">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((c) => ({ ...c, email: e.target.value }))}
                autoComplete="email"
                required
                disabled={submitting}
              />
            </label>

            <label className="handbook-modal__field">
              Mobile
              <input
                type="tel"
                value={form.mobile}
                onChange={(e) => setForm((c) => ({ ...c, mobile: e.target.value }))}
                autoComplete="tel"
                required
                disabled={submitting}
              />
            </label>

            {error ? <p className="handbook-modal__error">{error}</p> : null}

            <button type="submit" className="handbook-modal__submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send confirmation email'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
