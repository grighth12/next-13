const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <header>This is Root Header</header>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;