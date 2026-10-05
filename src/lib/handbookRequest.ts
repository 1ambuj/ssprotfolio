import { SITE_ORIGIN } from '../data/content'

export type HandbookRequestPayload = {
  handbookId: string
  name: string
  email: string
  mobile: string
  /** Where the email confirm link should open (portfolio origin). */
  confirmOrigin?: string
}

type HandbookRequestResult = { ok: true } | { ok: false; error: string }

/**
 * Sends handbook access request through the firm site API
 * (same Firebase + SMTP backend). Uses same-origin `/api/...` which is
 * proxied to sspartners.in in local Vite and Vercel production.
 */
export async function submitHandbookRequest(
  payload: HandbookRequestPayload,
): Promise<HandbookRequestResult> {
  const endpoints = [
    '/api/handbook-request',
    `${SITE_ORIGIN}/api/handbook-request`,
  ]

  let lastError = 'Could not send the request. Please try again.'

  for (const url of endpoints) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json().catch(() => null)) as
        | HandbookRequestResult
        | null

      if (response.ok && data && 'ok' in data && data.ok) {
        return { ok: true }
      }

      if (data && 'error' in data && data.error) {
        lastError = data.error
        // Don't fall through on validation errors from a working API
        if (response.status >= 400 && response.status < 500 && response.status !== 404) {
          return { ok: false, error: lastError }
        }
      }
    } catch {
      // try next endpoint
    }
  }

  return { ok: false, error: lastError }
}
