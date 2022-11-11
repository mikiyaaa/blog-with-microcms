import { client } from '../libs/client'
import styles from '../styles/Home.module.css'

// Static Site Generation(SSG)
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  return {
    props: {
      blogs: data.contents,
    }
  }
}

export default function Home({ blogs }) {
  return (
    <div>

    </div>
  )
}
