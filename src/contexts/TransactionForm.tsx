import { createContext, useContext, useState, ReactNode } from 'react';


// Define the type for the context
interface FormContextType {    
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    ammountExchanged: number;
    setAmmountExchanged: React.Dispatch<React.SetStateAction<number>>;
    currencyFrom: string;
    setCurrencyFrom: React.Dispatch<React.SetStateAction<string>>;
    ammountToReceive: number;
    setAmmountToReceive: React.Dispatch<React.SetStateAction<number>>;
    currencyTo: string;
    setCurrencyTo: React.Dispatch<React.SetStateAction<string>>;
    exchangeRate: number;
    setExchangeRate:React.Dispatch<React.SetStateAction<number>>
}

interface FormProviderProps {
  children: ReactNode;
}

// Initialize context with null
const FormContext = createContext<FormContextType | null>(null);

// Custom hook for consuming the context
export const useFormContext = () => {
    
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => {
    if(prev > 1) {
       return prev - 1
    } 
    return prev
  });

  // New state variables
  const [ammountExchanged, setAmmountExchanged] = useState<number>(0);
  const [currencyFrom, setCurrencyFrom] = useState<string>('');
  const [ammountToReceive, setAmmountToReceive] = useState<number>(0);
  const [currencyTo, setCurrencyTo] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  return (
    <FormContext.Provider
    value={{
      step,
      nextStep,
      prevStep,
      ammountExchanged,
      setAmmountExchanged,
      currencyFrom,
      setCurrencyFrom,
      ammountToReceive,
      setAmmountToReceive,
      currencyTo,
      setCurrencyTo,
      exchangeRate,
      setExchangeRate
    }}
  >
      {children}
    </FormContext.Provider>
  );
};
