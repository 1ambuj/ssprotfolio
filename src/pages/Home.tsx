import { About } from '../components/sections/About'
import { Blogs } from '../components/sections/Blogs'
import { Handbook } from '../components/sections/Handbook'
import { Services } from '../components/sections/Services'

export function Home() {
  return (
    <>
      <About />
      <Services />
      <Handbook />
      <Blogs />
    </>
  )
}
