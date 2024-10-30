'use client'

import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'

function SidebarNav() {

  const pathname = usePathname();

  return (
    <div className='h-screen bg-primary w-auto py-20'> 
        <nav className='flex h-full text-white font-medium text-2xl flex-col justify-between'>
          <ul className='space-y-5 pr-20'>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/inicio" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/inicio'}>
                          Inicio
              </Link>
            </li>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/transferir" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/transferir'}>
                          Transferir
              </Link>
            </li>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/recargar" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/recargar'}>
                          Recargar
              </Link>
            </li>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/intercambiar" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/intercambiar'}>
                          Intercambiar
              </Link>
            </li>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/perfil" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/perfil'}>
                          Perfil
              </Link>
            </li>
            <li className='my-5'>
            <Link className={`block w-full px-6 py-3
                            pl-[30%]
                            rounded-r-full transition-colors 
                            duration-200 
                            ${pathname == "/ayuda" ? 'bg-teal-400' : 'hover:bg-teal-600 '}`} 
                            href={'/ayuda'}>
                          Ayuda
              </Link>
            </li>

          </ul>
          <div className="pr-20">
            <Link className='pl-[30%] pr-20' href={'/login'} >Cerrar sesión</Link>
          </div>
        </nav>

        
    </div>
  )
}

export default SidebarNav