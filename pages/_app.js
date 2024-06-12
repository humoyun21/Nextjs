import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
        <div className="main">
           <Component {...pageProps} />
        </div>
      <Footer />
    </div>
  )
}
