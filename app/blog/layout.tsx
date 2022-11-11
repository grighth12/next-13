const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <header>This is Blog Header</header>
      {children}
    </>
  )
}

export default BlogLayout;