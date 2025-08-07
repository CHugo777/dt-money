import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { SearchForm } from "../searchform";
import { TransactionContext } from "../../contexts/transactioncontext";

import { PriceHighlight, TransactionsContainer, TrasactionsTable } from "./styles";


export function Transaction() {
  const { transactions } = useContext {TransactionContext};


  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TrasactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return(
            <tr key={transaction.id}>
              <td width="50%">{transaction.descripition}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                R$ {transaction.price}
                </PriceHighlight>
              </td> 
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
              )
            })}
            
          </tbody>
        </TrasactionsTable>
      </TransactionsContainer>
    </div>
  );
}
