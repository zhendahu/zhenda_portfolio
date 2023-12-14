import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#152342]">
      <Navbar/>
      <container class="container mx-auto px-12 py-4">
        <HeroSection />
      </container>
    </main>
  )
}
