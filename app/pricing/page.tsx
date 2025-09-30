import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la página de Pricing.'
};

export default function PricingPage(){
    return(
        <>
           <span className="text-5xl">Pricing Page</span> 
        </>
    );
};