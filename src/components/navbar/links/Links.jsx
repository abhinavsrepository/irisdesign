import styles from './links.module.css'
import Link from 'next/link';
import NavLink from './navLink/navLink';

 const Links = () => {
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
                        <button>LogOut</button>
                        </>

                    ):(
                <NavLink item={{title:"Login",path:"/login"}}/>
            )
        }

    </div>
  )
};
export default Links