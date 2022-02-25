import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { Container, RadioBox, TransactionTypeContainer } from "./styled";

import { useTransactions } from "../../hooks/useTransactions";

import inconImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { CreateTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleOpenNewTransaction(event: FormEvent) {
    event.preventDefault();

    await CreateTransaction({
      title,
      amount,
      category,
      type,
    });

    setType("deposit");
    setTitle("");
    setAmount(0);
    setCategory("");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overly"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      {/* formulário */}
      <Container onSubmit={handleOpenNewTransaction}>
        <h2>Cadastrar Informações</h2>
        <input
          value={title}
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={amount}
          placeholder="Valor"
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={inconImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdrawal");
            }}
            isActive={type === "withdrawal"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
