"use client"

import CurrencyBox from '@/components/ui/CurrencyBox'
import { authService } from '@/services'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface TransactionAttributes {
  amount: number;
  category_translate: string;
  currency: string;
}

interface Transaction { 
  type: string;
  attributes: TransactionAttributes;
}

interface Balances {
  usd: number;
  usdc: number;
  usdt: number;
  btc: number;
}

interface Attributes {
  first_name: string;
  balances: Balances
}

interface User { 
  attributes: Attributes 
}

function Page() {

  const [user, setUser] = useState<User>(); 
  const [transactions, setTransactions] = useState<Transaction[]>([]); 
  
  useEffect(() => {

    const fetchData = async () => {
      const responseUser = await authService.getUser();
      setUser(responseUser?.data.data);
      
      const responseTransactions = await authService.getTransactions();
      setTransactions(responseTransactions?.data.data)
      console.log(responseTransactions?.data.data);
    }

    fetchData();

  }, [])

  

  return (
    <div className="px-20 py-20">
      <div className='flex align-middle items-center mb-20'>
        <Image
          className='w-12 mr-5'
          src={'/images/icons/coin.png'}
          alt={'Coin icon'}
          width={200}
          height={200}
        />
        <h1 className='font-semibold text-2xl'>¡Hola {user?.attributes.first_name}!</h1>
      </div>
      <h3 className='text-2xl font-normal mb-5'>Mis Saldos</h3>
      <div className="flex justify-between space-x-10 mb-10">
        <CurrencyBox name_currency={'Peso chileno'} logo_currency={'/images/icons/chile.png'} quantity_currency={user?.attributes.balances.usd || 0} />
        <CurrencyBox name_currency={'Bitcoin'} logo_currency={'/images/icons/bitcoin.png'} quantity_currency={user?.attributes.balances.btc || 0} />
        <CurrencyBox name_currency={'Tether'} logo_currency={'/images/icons/tether.png'} quantity_currency={user?.attributes.balances.usdt || 0} />
      </div>
      <h3 className='text-2xl font-normal mb-5'>Historial</h3>
      {
        transactions?.map((transaction, index) =>
          <div key={index} className="flex w-full justify-between p-5 border-b">
            <p>{transaction.attributes.category_translate}</p>
            <p>$ {transaction.attributes.amount} {transaction.attributes.currency.toUpperCase()}</p>
          </div>
        )
      }
    </div>
  )
}

export default Page