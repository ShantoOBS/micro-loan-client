import React from 'react'
import Navbar from '../page/Common/Navbar'
import { Outlet } from 'react-router'
import Footer from '../page/Common/Footer'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        <Navbar></Navbar>

         <main className="flex-1"><Outlet></Outlet></main>
         
        <Footer></Footer>
      
    </div>
  )
}
