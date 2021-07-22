/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/List'
import { User } from '../interfaces'
import { findAll } from '../utils/sample-api'

type Props = {
  items: User[]
}

const WithInitialProps = ({ items }: Props): JSX.Element => {
  const router = useRouter()
  return (
    <Layout title="List Example (as Function Component) | Next.js + TypeScript + Electron Example">
      <h1>List Example (as Function Component)</h1>
      <p>You are currently on: {router.pathname}</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

interface StaticProps {
  props: Props
}

export async function getStaticProps(): Promise<StaticProps> {
  const items: User[] = await findAll()

  return { props: { items } }
}

export default WithInitialProps
