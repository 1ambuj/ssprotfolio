import { Link } from 'react-router-dom'
import { BlogCardList } from '../components/blog/BlogCardList'
import { Container } from '../components/ui/Container'
import { SectionLabel } from '../components/ui/SectionLabel'
import { blogSection, blogs } from '../data/content'

export function BlogsPage() {
  return (
    <section className="section-block bg-white">
      <Container>
        <Link to="/#blogs" className="link-subtle">
          ← Back to home
        </Link>

        <SectionLabel
          className="mt-8"
          title={blogSection.title}
          description={blogSection.description}
        />

        <p className="mt-4 font-body text-sm text-foreground/50">
          {blogs.length} articles
        </p>

        <div className="mt-10">
          <BlogCardList posts={blogs} />
        </div>
      </Container>
    </section>
  )
}
