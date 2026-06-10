import { Link } from 'react-router-dom'
import { BlogCardList } from '../blog/BlogCardList'
import { blogSection, blogs } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const HOME_BLOG_LIMIT = 6

export function Blogs() {
  const featuredBlogs = blogs.slice(0, HOME_BLOG_LIMIT)

  return (
    <section id="blogs" className="section-block bg-white">
      <Container>
        <SectionLabel
          title={blogSection.title}
          description={blogSection.description}
        />

        <div className="mt-12">
          <BlogCardList posts={featuredBlogs} />
        </div>

        {blogs.length > HOME_BLOG_LIMIT && (
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
