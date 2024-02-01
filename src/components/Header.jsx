import React from 'react'

function Header() {
  return (
    <>
    <div className=' sm:flex justify-between items-center bg-transparent   hidden  max-w-7xl mx-auto px-4 py-6 z-10'>

        <a href="/"> Whitepaper</a>
        <a href="/"> Tokenomics</a>

        <a href="/">
            <img src="images/logo.png" alt="" className=' h-[80px]' />
        </a>


        <a href="/">Pinksale</a>
        <a href="/"> Deployer bot</a>


    </div>
    </>
  )
}

export default Header