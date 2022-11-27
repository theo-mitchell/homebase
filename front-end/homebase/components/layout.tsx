import Navbar from './navbar'
import Footer from './footer'

const Layout= ({ children }: any) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;