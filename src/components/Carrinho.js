import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Carrinho = ({carrinho, handleLimparCarrinho}) => {

  let total = carrinho.reduce((total, item) => total + item.valor, 0)
  let qntd = carrinho.reduce((qntd) => qntd + 1, 0)

  return (
    <Dropdown drop="left">
      <Dropdown.Toggle>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.875 5.25C29.75 5.12502 29.625 4.99998 29.375 4.99998H5.625L4.99998 1.75002C4.99998 1.5 4.62498 1.25004 4.37496 1.25004H0.624961C0.25002 1.24998 0 1.5 0 1.875C0 2.25 0.25002 2.50002 0.62502 2.50002H3.87504L6.87504 17.7501C7.25004 19.75 9.12504 21.25 11.125 21.25H25.5C25.875 21.25 26.125 21 26.125 20.625C26.125 20.25 25.875 20 25.5 20H11.25C10.25 20 9.25002 19.5 8.74998 18.625L27 16.125C27.25 16.125 27.5 15.875 27.5 15.625L30 5.625C30 5.625 30 5.37498 29.875 5.25ZM26.375 15L8.12496 17.375L5.87496 6.12498H28.5L26.375 15Z" fill="white"/>
          <path d="M10.625 22.5C8.87502 22.5 7.5 23.875 7.5 25.625C7.5 27.375 8.87502 28.75 10.625 28.75C12.375 28.75 13.75 27.3749 13.75 25.625C13.75 23.875 12.375 22.5 10.625 22.5ZM10.625 27.5C9.62496 27.5 8.74998 26.6249 8.74998 25.625C8.74998 24.625 9.62496 23.75 10.625 23.75C11.625 23.75 12.5 24.625 12.5 25.625C12.5 26.6249 11.625 27.5 10.625 27.5Z" fill="white"/>
          <path d="M23.125 22.5C21.375 22.5 20 23.875 20 25.625C20 27.375 21.3751 28.75 23.125 28.75C24.875 28.75 26.25 27.3749 26.25 25.625C26.25 23.875 24.875 22.5 23.125 22.5ZM23.125 27.5C22.125 27.5 21.25 26.6249 21.25 25.625C21.25 24.625 22.125 23.75 23.125 23.75C24.125 23.75 25 24.625 25 25.625C25 26.6249 24.125 27.5 23.125 27.5Z" fill="white"/>
        </svg>
        <Badge pill variant="light" className="position-absolute text-primary font-weight-normal">{qntd}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu show={ carrinho.length ? true : false}>
        { carrinho.length ? carrinho.map((item, index) => (
          <Row key={index} className="px-3 mb-2">
            <Col>
              <div className="small text-black-50">{item.sabor} {item.quantidade}</div>
            </Col>
            <Col>
              <div className="small text-black-50 text-right">
                { new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(item.valor) }
              </div>
            </Col>
          </Row>
        )) :
          <div className="small text-black-50 text-center">Nenhum item selecionado.</div>
        }
        <Dropdown.Divider></Dropdown.Divider>
        <Row className="px-3 py-1">
          <Col>
            <div className="text-black-50">
              Total:
            </div>
          </Col>
          <Col>
            <div className="text-primary font-weight-bold text-right">
              { new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(total) }
            </div>
          </Col>
        </Row>
        { carrinho.length ?
          <div>
            <Dropdown.Divider></Dropdown.Divider>
            <Row className="px-3 py-2">
              <Col>
                <Button onClick={ () => handleLimparCarrinho()} variant="light" size="sm" block className="text-primary">Limpar carrinho</Button>
              </Col>
              <Col>
                <Button variant="primary" size="sm" block>Finalizar pedido</Button>
              </Col>
            </Row>
          </div>
        : '' }
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default Carrinho;