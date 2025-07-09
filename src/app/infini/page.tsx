"use client"
// import dynamic from 'next/dynamic';

// Use dynamic import to load the KonvaCanvas component only on the client side
// const KonvaCanvas = dynamic(() => import('@/components/custom/KonvaCanvas'), {
//     ssr: false, // This is the key to preventing server-side rendering
// });


export default function Infini() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-white">
            {/* <h1 className="text-4xl font-bold mb-8">Inferno AI</h1>
            <KonvaCanvas />

            <p className="mt-8 text-gray-600">
                Next step: Implement panning and zooming.
            </p> */}
            <div className=' w-full grow'>
                <div className='grid grid-cols-4 gap-0 md:grid-cols-12 '>
                    {Array.from({ length: 48 }).map((_, index) => (

                        <SqarePlus key={index} />
                    ))}

                </div>
                {/* <PlusSVG /> */}
            </div>
        </main>
    )
}

const PlusSVG = ({ className }: { className: string }) => (
    <svg className={className} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.5" y1="1.87335e-08" x2="3.5" y2="7" stroke="black" />
        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="black" />
    </svg>
)

const SqarePlus = () => (
    <div className="relative h-0 pt-[100%] border">
        <div className="absolute -left-1 -top-1"><PlusSVG className='' /></div>
        <div className="absolute -left-1 -bottom-1"><PlusSVG className='' /></div>
        <div className="absolute -right-1 -top-1"><PlusSVG className='' /></div>
        <div className="absolute -right-1 -bottom-1"><PlusSVG className='' /></div>
    </div>
)