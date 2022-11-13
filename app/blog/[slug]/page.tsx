'use client';

import { Suspense, useEffect, useState } from "react";;
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "./loading";
interface Props {
  params: {slug : string},
  searchParams: {id:string}
};

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();

  return posts;
};


const Page = ({params, searchParams}: Props) => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const setDocumentTitle = async () => {
      const post = await getPost(params.slug);       
      document.title = post.title;
      setPost(post);
    }

    setDocumentTitle();
  }, [params.slug]);


  return (<>
        <div>
          <h1>{post?.title}</h1>
          <p>Slug: {params.slug}</p>
          <p>Id: {searchParams.id}</p>
        </div>
        <Link href="/">Go to home</Link>
        <button onClick={() => { router.refresh() }}>refresh</button>
    </>);
};

export default Page;