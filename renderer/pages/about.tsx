/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = (): JSX.Element => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
