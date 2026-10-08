import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlogCardList } from '../blog/BlogCardList'
import { blogSection, blogs as fallbackBlogs, type PortfolioBlog } from '../../data/content'
import { fetchFirmBlogs } from '../../lib/firmBlogs'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const HOME_BLOG_LIMIT = 6

export function Blogs() {
  const [posts, setPosts] = useState<PortfolioBlog[]>(fallbackBlogs.slice(0, HOME_BLOG_LIMIT))
  const [total, setTotal] = useState(fallbackBlogs.length)

  useEffect(() => {
    let active = true

    fetchFirmBlogs()
      .then((firmBlogs) => {
        if (!active || firmBlogs.length === 0) return
        setPosts(firmBlogs.slice(0, HOME_BLOG_LIMIT))
        setTotal(firmBlogs.length)
      })
      .catch(() => {
        /* keep static fallback */
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section id="blogs" className="section-block bg-background">
      <Container>
        <SectionLabel
          title={blogSection.title}
          description={blogSection.description}
        />

        <div className="mt-12">
          <BlogCardList posts={posts} />
        </div>

        {total > HOME_BLOG_LIMIT && (
          <div className="mt-10 flex items-center justify-center">
            <Link to="/blogs" className="btn-primary">
              View all blogs
            </Link>
          </div>
        )}
      </Container>
    </section>
  )
}
