import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Refrigerantes = ({refrigerantes, handleSelecionarRefrigerante, handleCurtirRefrigerante}) => {
  return (
    <Row>
      {refrigerantes.map((refrigerante, index) => (
        <Col sm={6} lg={4} key={refrigerante.id} className="mb-4">
          <Card>
            <Card.Header className="text-primary font-weight-bold">
              {refrigerante.sabor} {refrigerante.quantidade}
              <div className="float-right">
                <span className="text-black-50 small mr-2">{refrigerante.curtidas}</span>
                <span onClick={()=>handleCurtirRefrigerante(index)} className={refrigerante.curtidas ? 'like-icon liked' : 'like-icon'}></span>
              </div>
            </Card.Header>
            <Card.Body>
              <Row className="mb-3">
                <Col>
                  <Card.Text className="text-black-50 small">Fabricado por {refrigerante.marca}</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-right text-primary font-weight-bold">
                    { new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }).format(refrigerante.valor) }
                  </Card.Text>
                </Col>
              </Row>
              <Button onClick={()=>handleSelecionarRefrigerante(refrigerante)} variant="primary" block>Selecionar</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default Refrigerantes;