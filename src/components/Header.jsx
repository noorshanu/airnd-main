import React from 'react'

function Header() {
  return (
    <>
    <div className=' sm:flex justify-between items-center bg-transparent   hidden  max-w-7xl mx-auto px-4 py-6'>

        <a href="/"> Home</a>
        <a href="/"> Whitepaper</a>

        <a href="/">
            <img src="images/logo.png" alt="" className=' h-[80px]' />
        </a>


        <a href="/"> Home</a>
        <a href="/"> Whitepaper</a>


    </div>
    </>
  )
}

export default Header