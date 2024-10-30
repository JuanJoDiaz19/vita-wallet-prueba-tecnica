"use client"


import React from 'react'
import { useFormContext } from '@/contexts/TransactionForm';
import Step1From from "./Step1Form"
import Step2Form from './Step2Form';

function Page() {

  
  const {step} = useFormContext();


  return (
    <div className="w-[75vw]">
      {step == 1 ? <Step1From /> : ""}
      {step == 2 ? <Step2Form /> : ""}

    </div>
  )
}

export default Page