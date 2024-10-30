import Image from 'next/image'
import React from 'react'

interface ButtonProps {
    name_currency: string;
    logo_currency:string;
    quantity_currency: number;
}


const CurrencyBox: React.FC<ButtonProps> = ({ name_currency, logo_currency, quantity_currency }) => {
    return (
        <div className="min-w-72 bg-gray-100 rounded-lg border-2 border-slate-300 p-5 w-full">
            <div className="flex justify-between pb-8">
                <p>{name_currency}</p>
                <Image className='w-6 h-6' src={logo_currency} alt={'Icono peso chileno'} width={200} height={200} />
            </div>
            <p className='text-xl font-semibold'>${quantity_currency}</p>
        </div>
    )
}

export default CurrencyBox