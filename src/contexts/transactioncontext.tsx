import { Children, useState, useEffect ,createContext } from "react";


interface Transaction {
  id: number;
  descripition: string;
  type: 'income' | 'outcome';
  price: 'number';
  category: 'string';
  createdAt: 'string';

}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}


export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
  
   useEffect(() => {
    async function loadTransactions() {
      const response = await fetch ('http://localhost:3000/transactions')
      const data = await response.json();
        setTransactions(data);
    }
  
    loadTransactions();
  }, [])
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}