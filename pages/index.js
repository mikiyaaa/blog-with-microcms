import { client } from '../libs/client'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

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
    <div className={styles.container}>
      {blogs.map((blog, index) => (
        <li key={index}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}
