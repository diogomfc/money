import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
//import { GlobalStyle } from "./styles/global";

import { NewTransactionModal } from "./components/NewTransactionModal/Index";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
