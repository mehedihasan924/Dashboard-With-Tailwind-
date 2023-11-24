import React, { useState }  from 'react'
import { FaBars, FaShoppingBag, FaTh, FaThList, FaUserAlt} from "react-icons/fa";

import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const [open, setOpen]=useState()

   const toggle=()=>{
      setOpen(!open)
   }
  const menuItems=[
    {
        path:"/",
        name: "Deshboard",
        icon:<FaTh></FaTh>
    },
    {
        path:"/about",
        name: "About",
        icon:<FaUserAlt></FaUserAlt>
    },
    {
        path:"/product",
        name: "Product",
        icon:<FaShoppingBag></FaShoppingBag>
    },
    {
        path:"/user",
        name: "Users",
        icon:<FaThList></FaThList>
    } 
  ]

  return (
    <div className=" flex lg:ml-3">
        <div style={{width:open ? "300px" : "50px"}} className="sidebar  bg-slate-500 h-[100vh]">
            <div className="top_section flex items-center justify-between px-1  py-5">
                <div style={{display: open? "block" : "none"}} className="logo text-3xl font-bold ml-3 "> Logo</div>
                <div style={{marginLeft: open? "50px" : "8px"}} className="bars flex text-2xl ml-[20px] text-amber-50">
                    <FaBars onClick={toggle}></FaBars>
                </div>
            </div> 
            {
                menuItems.map((items ,index)=>(
                    <NavLink to={items.path} key={index} className="link flex items-center hover:bg-blue-600 px-2 px-[15px] py-3 gap-5 transition-shadow " activeclasName="active">
                        <div className="icon"> {items.icon}</div>
                     {open  ? <div className="link_text ">{items.name} </div> :  <div className="link_text "> </div> }
                    </NavLink>
                ))
            }
        </div>
            <main style={{width: open? "100%" : "100%"}} className='w-full '>
                <div className=' bg-slate-500 h-[60px] text-center flex justify-center items-center '> 
                <h1 className='lg:text-2xl font-extrabold text-white' > This is Dashboard Info</h1>
                </div>
                
            <div className=' p-[20px]'> {children}  </div> 
            </main>
    </div>
  )
}

export default Sidebar