import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlogCardList } from '../components/blog/BlogCardList'
import { Container } from '../components/ui/Container'
import { SectionLabel } from '../components/ui/SectionLabel'
import { blogSection, blogs as fallbackBlogs, type PortfolioBlog } from '../data/content'
import { fetchFirmBlogs } from '../lib/firmBlogs'

export function BlogsPage() {
  const [posts, setPosts] = useState<PortfolioBlog[]>(fallbackBlogs)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetchFirmBlogs()
      .then((firmBlogs) => {
        if (!active) return
        if (firmBlogs.length > 0) setPosts(firmBlogs)
      })
      .catch(() => {
        /* keep static fallback */
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

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
          {loading ? 'Loading articles…' : `${posts.length} articles`}
        </p>

        <div className="mt-10">
          <BlogCardList posts={posts} />
        </div>
      </Container>
    </section>
  )
}
