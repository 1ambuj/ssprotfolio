import { SITE_ORIGIN, type PortfolioBlog } from '../data/content'

const FIRESTORE_BLOGS_URL =
  'https://firestore.googleapis.com/v1/projects/sandeep-singla-associates/databases/(default)/documents/blogs?pageSize=100'

type FirestoreValue = {
  stringValue?: string
  timestampValue?: string
  booleanValue?: boolean
}

type FirestoreDoc = {
  fields?: Record<string, FirestoreValue>
}

function field(doc: FirestoreDoc, key: string) {
  return doc.fields?.[key]?.stringValue?.trim() ?? ''
}

function dateLabel(iso?: string) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function cardImageUrl(thumbnail: string) {
  if (!thumbnail) return ''
  if (thumbnail.includes('ik.imagekit.io')) {
    const clean = thumbnail.split('?')[0]
    return `${clean}?tr=w-800,h-500,c-at_max`
  }
  return thumbnail
}

function mapDoc(doc: FirestoreDoc): (PortfolioBlog & { _sort: number }) | null {
  const slug = field(doc, 'slug')
  const title = field(doc, 'title')
  if (!slug || slug.length < 2 || !title) return null

  const subtitle = field(doc, 'subtitle')
  const category = field(doc, 'category') || field(doc, 'subCategory') || 'Insights'
  const thumbnail = field(doc, 'thumbnail')
  const publishDate =
    doc.fields?.publishDate?.timestampValue ||
    doc.fields?.createdAt?.timestampValue ||
    ''
  const sortTime = publishDate ? Date.parse(publishDate) : 0

  return {
    slug,
    category,
    date: dateLabel(publishDate) || 'Recent',
    icon: 'newspaper',
    title,
    excerpt: subtitle || title,
    readTime: '',
    href: `${SITE_ORIGIN}/blog/${slug}`,
    image: cardImageUrl(thumbnail) || undefined,
    _sort: Number.isNaN(sortTime) ? 0 : sortTime,
  }
}

/** Live blogs from the firm website (Firestore public read). No Firebase login needed. */
export async function fetchFirmBlogs(): Promise<PortfolioBlog[]> {
  const response = await fetch(FIRESTORE_BLOGS_URL)
  if (!response.ok) {
    throw new Error(`Could not load firm blogs (${response.status})`)
  }

  const data = (await response.json()) as { documents?: FirestoreDoc[] }
  return (data.documents ?? [])
    .map(mapDoc)
    .filter((post): post is PortfolioBlog & { _sort: number } => Boolean(post))
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort: _ignored, ...post }) => post)
}
