"use client"

import SidebarNav from '@/components/SidebarNav'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@/components/ui/Button';
import ButtonEmpty from '@/components/ui/ButtonEmpty';
import { InputAdornment, OutlinedInput, TextField } from '@mui/material';
import Image from 'next/image';
import { useFormContext } from '@/contexts/TransactionForm';
import Modal from '@/components/ui/Modal';
import { useRouter } from 'next/navigation';
import { authService } from '@/services';


function Step2Form() {

    const {
        ammountExchanged,
        currencyFrom,
        ammountToReceive,
        currencyTo,
        exchangeRate,
        step,
        prevStep,
        nextStep
    } = useFormContext();

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async () => {
        const res = await authService.postTransaction(currencyFrom, currencyTo, ammountExchanged);
        if (res) {
            setIsModalOpen(true)
        } else {
            alert("Error al hacer la transaccion, volver a intentar mas tarde")
        }
    };


    return (
        <div className='px-48 py-20 min-h-screen flex flex-col justify-between'>
            <div className="mb-10 w-3/4">
                <h1 className='mb-10 text-3xl font-semibold'>Resumen de transaccion</h1>
                <div className="bg-gray-100 rounded-md p-5 border">
                    <ul className='flex flex-col space-y-3'>
                        <li className='flex justify-between'>
                            <p>Monto a intercambiar</p>
                            <p className='font-semibold'>{ammountExchanged} {currencyFrom.toUpperCase()}</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Tasa de cambio</p>
                            <p className='font-semibold'>{exchangeRate}</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Total a recibir</p>
                            <p className='font-semibold text-secondary'>{ammountToReceive} {currencyTo.toUpperCase()}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex space-x-5 w-96">
                <ButtonEmpty
                    title="Atras"
                    onClick={() => prevStep()}
                />

                <Button
                    title={step !== 2 ? "Continuar" : "Intercambiar"}
                    onClick={() => {
                        handleSubmit()
                    }}
                />
            </div>
            <Modal isOpen={isModalOpen} onClose={() => {
                setIsModalOpen(false)
                router.push("/inicio")
                prevStep()
            }} >
                <Image className='w-96 h-96 mb-8' src={'/images/end-transaction.png'} alt={'End transaction image'} width={500} height={500} />
                <h2 className='text-2xl font-semibold text-primary mb-6'>¡Intercambio exitoso!</h2>
                <p>Ya cuentas con los {currencyTo.toUpperCase()} en tu saldo.</p>
            </Modal>

        </div>

    )
}

export default Step2Form