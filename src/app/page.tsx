import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

async function Home () {

    return (
      <>
      <div className="min-h-screen flex flex-col justify-between">
      <Header/>
      <Hero />
      <Footer />
      </div>
      </>
    )
}

export default Home