'use client';

import Link from "next/link";
import "./ActiveLink.css"
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path,text}:Props) => {

    const pathName = usePathname();
    const activeLink = 'active-link';
    return (
        <Link key={path} className={`link ${(path === pathName) && activeLink}`} href={path}>{text}</Link>
    )
}
