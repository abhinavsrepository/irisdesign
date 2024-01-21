"use client";
import styles from './links.module.css'
import Link from 'next/link';

import NavLink from './navLink/navLink';
import { useState } from 'react';

 const Links = () => {
    const [open,setOpen] = useState(false)
    const links =[
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        
        {
            title:"Blog",
            path:"/blog",
        },
    ]
        const session = true;
        const isAdmin =true;
    
  return (
    <div className={styles.container}>
    <div className={styles.links}>
        {links.map((link)=>(
            <NavLink item={link} Key={link.title}/>
            // <Link href={link.path} key={link.title}>{link.title}
           
        ))}{
            session ?(
                <>
                {
                            isAdmin && 
                                <NavLink item ={{title:"Admin",path:"/admin"}} />
                            
                        }
                        <button className={styles.logout}>LogOut</button>
                        </>

                    ):(
                <NavLink item={{title:"Login",path:"/login"}}/>
            )
        }

    </div>
    <button onClick={()=>setOpen(prev=>!prev)}>Menu</button>
    {
        open && <div className={styles.mobileLinks}>
            {
                links.map((link)=>(
                    <NavLink item={link} key={link.title}/>

                ))
            }
            </div>
    }
    </div>
  )
};
export default Links