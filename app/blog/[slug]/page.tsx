"use client";

import { useEffect } from "react";
import Head from "next/head";
interface Props {
  params: { slug: string };
  searchParams: { id: string };
}

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();

  return posts;
};

const Page = ({ params, searchParams }: Props) => {
  useEffect(() => {
    const setDocumentTitle = async () => {
      const post = await getPost(params.slug);
      document.title = post.title;
    };

    setDocumentTitle();
  }, [params.slug]);

  return (
    <>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div>
        <h1>Blog Post</h1>
        <p>Slug: {params.slug}</p>
        <p>Id: {searchParams.id}</p>
      </div>
    </>
  );
};

export default Page;
