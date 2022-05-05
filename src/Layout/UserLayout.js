import React from 'react'
import Header from './../components/Header';
import SideBar from './../components/SideBar';
import Footer from './../shared/Footer';

export default function UserLayout({children}) {
  return (
      <>
      <Header/>
      <SideBar/>
      <main>{children}</main>
      <Footer/>
      </>
  )
}
