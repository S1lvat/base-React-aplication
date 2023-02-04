import React from 'react';

import { toast } from 'react-toastify';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/globalStyles';

export default function Login() {
  toast.success('Bem-vindo!');

  return (
    <Container>
      <Title>
        Login
        <small>Qualquer coisa!</small>
      </Title>
      <Paragrafo>Outra coisa no paragrafo</Paragrafo>
      <button type="button">Login!</button>
    </Container>
  );
}
