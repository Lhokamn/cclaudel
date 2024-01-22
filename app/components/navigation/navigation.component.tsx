'use client';
import Link from 'next/link'
import { usePathname } from "next/navigation";
import styles from './navigation.module.css'

export default function NavigationSection (){

    const pathname = usePathname()
    
    return (        
        <nav>
            <Link href="/" className={`link ${pathname == "/" ? styles.active : ""}`}>Accueil</Link>
            <Link href="/parcours" className={`link ${pathname == "/parcours" ? styles.active : ""}`}>Parcours</Link>
            <Link href="/portfolio" className={`link ${pathname == "/portfolio" ? styles.active : ""}`}>PortFolio</Link>
        </nav>
    )
}