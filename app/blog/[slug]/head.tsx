
interface Props {
  params: {slug : string},
}

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const posts = await res.json()

  return posts
}


const BlogHead = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  return (
    <>
      <title>{post.title}</title>
    </>
  )
}

export default BlogHead;