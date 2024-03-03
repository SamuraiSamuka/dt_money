import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransacModal: () => void;
}

export function Header({ onOpenNewTransacModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransacModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
