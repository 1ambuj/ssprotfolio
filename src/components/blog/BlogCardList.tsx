import { Newspaper, type LucideIcon } from 'lucide-react'
import { getBlogUrl, type PortfolioBlog } from '../../data/content'
import { ContentCard } from '../ui/ContentCard'

const fallbackIcon: LucideIcon = Newspaper

export function BlogCardList({ posts }: { posts: PortfolioBlog[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <ContentCard
          key={post.slug}
          href={post.href || getBlogUrl(post.slug) || undefined}
          newTab
          coverUrl={post.image}
          coverAlt={post.title}
          coverAspect="landscape"
          icon={post.image ? undefined : fallbackIcon}
          meta={`${post.category}${post.date ? ` · ${post.date}` : ''}`}
          title={post.title}
          subtitle={post.readTime || undefined}
          description={post.excerpt}
          cta="Read on website"
        />
      ))}
    </div>
  )
}
