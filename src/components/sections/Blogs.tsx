import {
  Landmark,
  Newspaper,
  Receipt,
  type LucideIcon,
} from 'lucide-react'
import { blogSection, blogs } from '../../data/content'
import { Container } from '../ui/Container'
import { ContentCard } from '../ui/ContentCard'
import { SectionLabel } from '../ui/SectionLabel'

const iconMap: Record<string, LucideIcon> = {
  newspaper: Newspaper,
  receipt: Receipt,
  landmark: Landmark,
}

export function Blogs() {
  return (
    <section id="blogs" className="section-block bg-white">
      <Container>
        <SectionLabel
          title={blogSection.title}
          description={blogSection.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((post) => (
            <ContentCard
              key={post.slug}
              to={`/blog/${post.slug}`}
              icon={iconMap[post.icon]}
              meta={`${post.category} · ${post.date}`}
              title={post.title}
              subtitle={post.readTime}
              description={post.excerpt}
              cta="Read more"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
