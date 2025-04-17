import React, { createContext, useState } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const updateTransaction = (updatedTxn) => {
    setTransactions((prev) =>
      prev.map((txn) => (txn.id === updatedTxn.id ? updatedTxn : txn))
    );
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
