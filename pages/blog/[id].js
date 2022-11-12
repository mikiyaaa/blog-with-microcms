import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

// SSG
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({
        endpoint: "blog",
        contentId: id,
    })

    return {
        props: {
            blog: data,
        }
    }
}

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: 'blog',
    });

    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

// 返すコンポーネント
const BlogId = ({ blog }) => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.body }} className={styles.post}></div>
        </main>
    )
}

export default BlogId;