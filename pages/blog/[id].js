import { client } from "../../libs/client";

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
        <main>
            <h1>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
        </main>
    )
}

export default BlogId;