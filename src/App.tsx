import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionContext";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function App() {
  const [newTransacModalIsOpen, setNewTransacModalIsOpen] = useState(false);
  function openNewTransactionModal() {
    setNewTransacModalIsOpen(true);
  }

  function closeNewTransactionModal() {
    setNewTransacModalIsOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransacModal={openNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={newTransacModalIsOpen}
        onRequestClose={closeNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
