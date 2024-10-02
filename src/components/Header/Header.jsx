import React from 'react'
// import navbarLogo from "../Header/../Header../"
import navbarLogo from "../../assets/navbarLogo.svg"
import { Link } from 'react-router-dom'
const Header=()=>{
  return (


    <header className={`max-w-screen-2xl mx-auto bg-blue-400  layoutPadding fixed top-0 right-0 left-0`}>
      <div className='  border-0 border-b-2  border-opacity-35 pt-3 pb-2 bg-red-500'>
        <div className='w-full flex items-center justify-end'>

          <div id='left-navbar' className='flex items-center justify-start gap-x-4 xl:gap-x-6'>


      <img
      src={navbarLogo}
      loading='eager'
      alt='bmw-logo'
      />
      <nav>
        <ul>
          <li><Link to={"/"}>Hello</Link></li>
        </ul>

      </nav>


          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;
        // {/* <Link to={"/"}>Models</Link>
        // <Link to={"/"}>Electric</Link>
        // <Link to={"/"}>Configurator</Link>
        // <Link to={"/"}>Visit Online Shop</Link>
        // <Link to={"/"}>More BMW</Link> */}