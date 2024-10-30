"use client"

import React, { useEffect, useState } from 'react'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@/components/ui/Button';
import ButtonEmpty from '@/components/ui/ButtonEmpty';
import { InputAdornment, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import { useFormContext } from '@/contexts/TransactionForm';
import { authService } from '@/services';


function Step1Form() {

    const {
        ammountExchanged,
        setAmmountExchanged,
        currencyFrom,
        setCurrencyFrom,
        ammountToReceive,
        setAmmountToReceive,
        currencyTo,
        setCurrencyTo,
        setExchangeRate,
        step,
        prevStep,
        nextStep
    } = useFormContext();


    const [prices, setPrices] = useState<any>();
    const [balance, setBalance] = useState<number>();

    useEffect(() => {
        const fetchData = async () => {
            const responsePrices = await authService.getGetPrices();
            console.log(responsePrices?.data)
            setPrices(responsePrices?.data);

            const responseUser = await authService.getUser();
            setBalance(responseUser?.data.data.attributes.balances.usd)
        }

        fetchData();
    }, [])

    useEffect(() => {
        if (ammountExchanged && currencyFrom && currencyTo) {

            console.log(ammountExchanged);
            console.log(currencyFrom);
            console.log(currencyTo);

            let exchangeRate

            if (currencyTo == "btc") {
                exchangeRate = prices?.prices.usd.btc
            }
            if (currencyTo == "usdt") {
                exchangeRate = prices?.prices.usd.usdt
            }
            if (currencyTo == "usdc") {
                exchangeRate = prices?.prices.usd.usdc
            }

            // Casting ammountExchanged to a double
            const doubleExchangeRate = parseFloat(exchangeRate);
            setExchangeRate(doubleExchangeRate);


            setAmmountToReceive(exchangeRate * ammountExchanged)

        }
    }, [ammountExchanged, currencyFrom, currencyTo])




    const handleChangeFrom = (event: SelectChangeEvent) => {
        setCurrencyFrom(event.target.value);
    };

    const handleChangeTo = (event: SelectChangeEvent) => {
        setCurrencyTo(event.target.value);
    };

    return (
        <div className='px-48 py-20 min-h-screen flex flex-col justify-between'>
            <div className="mb-10 w-1/2">
                <h1 className='text-4xl font-semibold mb-10'>¿Que deseas intercambiar?</h1>
                <p className='text-secondary font-semibold mb-20' >Saldo disponible {balance} CLP</p>

                <p className='text-base mb-5'>Monto a intercambiar</p>

                <div className="flex items-center justify-start gap-2 mb-10">

                    <FormControl sx={{ minWidth: 80 }}>
                        <Select
                            value={currencyFrom}
                            onChange={handleChangeFrom}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'usd'}>
                                <Image className='w-6 h-6 object-contain' src={'/images/icons/chile.png'} alt={'Bitcoin logo'} width={200} height={200} />
                            </MenuItem>

                        </Select>
                    </FormControl>


                    <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        value={ammountExchanged} // Controlled input
                        type='numeric'
                        onChange={(event) => {
                            const value = event.target.value;
                            // Allow only numeric values
                            if (/^\d*\.?\d*$/.test(value)) {

                                setAmmountExchanged(parseFloat(value));
                            }
                        }} // Update state on input change
                    />

                </div>
                <p className='text-base mb-5'>Quiero recibir</p>

                <div className="flex items-center justify-start gap-2 mb-10">

                    <FormControl sx={{ minWidth: 80 }}>
                        <Select
                            value={currencyTo}
                            onChange={handleChangeTo}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"btc"}>
                                <Image className='w-6 h-6 object-contain' src={'/images/icons/bitcoin.png'} alt={'Bitcoin logo'} width={200} height={200} />
                            </MenuItem>
                            <MenuItem value={"usdt"}>
                                <Image className='w-6 h-6 object-contain' src={'/images/icons/tether.png'} alt={'Bitcoin logo'} width={200} height={200} />
                            </MenuItem>
                            <MenuItem value={"usdc"}>
                                <Image className='w-6 h-6 object-contain' src={'/images/icons/usdc.png'} alt={'Bitcoin logo'} width={200} height={200} />
                            </MenuItem>
                        </Select>
                    </FormControl>


                    <OutlinedInput
                        fullWidth
                        disabled
                        id="outlined-adornment-amount"
                        value={ammountToReceive} // Controlled input
                        type='numeric'
                    />

                </div>
            </div>
            <div className="flex space-x-5 w-96">
                <ButtonEmpty
                    title="Atras"
                    onClick={() => prevStep()}
                />

                <Button
                    title={step !== 2 ? "Continuar" : "Intercambiar"}
                    onClick={() => nextStep()}
                />
            </div>

        </div>

    )
}

export default Step1Form