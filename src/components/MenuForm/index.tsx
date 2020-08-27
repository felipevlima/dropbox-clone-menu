import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form name="contact" method="POST" data-netlify="true">
        <span className="title">Registre-se</span>
        <span className="subtitle">preenchao formulario</span>

        <input name="nome" type="text" placeholder="Nome" />
        <input name="sobrenome" type="text" placeholder="Sobrenome" />
        <input name="email" type="email" placeholder="E-mail" />
        <input name="senha" type="password" placeholder="Senha" />

        <button type="submit">Prosseguir</button>

        <span className="terms">Esta página é protegida pelo reCAPTCHA e está sujeita à Política de privacidade e aos Termos de serviço do Google.</span>
      </Form>
    </Container>
  );
};

export default MenuForm;
