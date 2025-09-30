import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Esta es la página de About.',
    keywords: ['About Page', 'Beiss', 'información']
};

export default function AboutPage(){
    return(
        <>
           <span className="text-5xl">About Page</span> 
        </>
    )
}