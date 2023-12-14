import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  <span className="text-[#64FFDA] text-base sm:text-1xl lg:text-2xl font-mono bg-clip-text">Hi, my name is </span> 
                  Zhenda Hu. I'm a:
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                  bakldsjfaklsdjfaklsdjf
              </p>
              <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-500 text-white">
                  Hire Me
                </button>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-500 text-white mt-3'>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                  src="/images/zhenda_memoji.png"
                  alt="hero image"
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  width={300}
                  height={300}
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;