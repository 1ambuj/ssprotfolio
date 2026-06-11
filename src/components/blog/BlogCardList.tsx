import {
  Briefcase,
  Globe,
  Landmark,
  Newspaper,
  Receipt,
  type LucideIcon,
} from 'lucide-react'
import { getBlogUrl, type PortfolioBlog } from '../../data/content'
import { ContentCard } from '../ui/ContentCard'

const iconMap: Record<string, LucideIcon> = {
  newspaper: Newspaper,
  receipt: Receipt,
  landmark: Landmark,
  briefcase: Briefcase,
  globe: Globe,
}

const fallbackIcon = Newspaper

export function BlogCardList({ posts }: { posts: PortfolioBlog[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <ContentCard
          key={post.slug}
          href={getBlogUrl(post.slug) ?? post.href}
          newTab={false}
          icon={iconMap[post.icon] ?? fallbackIcon}
          meta={`${post.category} · ${post.date}`}
          title={post.title}
          subtitle={post.readTime}
          description={post.excerpt}
          cta="Read more"
        />
      ))}
    </div>
  )
}
