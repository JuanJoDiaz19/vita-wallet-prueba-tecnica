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
import Step1From from "./Step1Form"
import Step2Form from './Step2Form';

function Page() {

  
  const {step, nextStep, prevStep } = useFormContext();


  return (
    <div className="w-[75vw]">
      {step == 1 ? <Step1From /> : ""}
      {step == 2 ? <Step2Form /> : ""}

    </div>
  )
}

export default Page