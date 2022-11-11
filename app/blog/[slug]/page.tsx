
interface Props {
  params: {slug : string},
  searchParams: {id:string}
}

const Page =({params, searchParams}: Props) => {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {params.slug}</p>
      <p>Id: {searchParams.id}</p>
    </div>);
}

export default Page;