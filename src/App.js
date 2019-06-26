import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

import Carrinho from './components/Carrinho';
import Refrigerantes from './components/Refrigerantes';

import './App.scss';

class App extends React.Component {

  state = {
    loading: false,
    refrigerantes: [],
    carrinho: []
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://api.adsim.co/crm/api/v1/refrigerante/listar')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          refrigerantes: data,
          loading: false
        })
      })
      .catch(console.log)
  }

  handleSelecionarRefrigerante = (refrigerante) => {
    this.setState(state => {
      const carrinho = state.carrinho.concat(refrigerante)
      return {
        carrinho
      }
    })
  }

  handleCurtirRefrigerante = (index) => {
    let data = JSON.parse(JSON.stringify(this.state.refrigerantes))
    data[index].curtidas = data[index].curtidas + 1
    this.setState({
      refrigerantes: data
    })
  }

  handleLimparCarrinho = (carrinho) => {
    this.setState({ carrinho: [] })
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" fixed="top" expand={false}>
          <Navbar.Brand href="#">ADSim <small>/ Refrigerantes</small></Navbar.Brand>
          <Carrinho carrinho={this.state.carrinho} handleLimparCarrinho={this.handleLimparCarrinho} />
        </Navbar>
        <Container fluid>
          <div className={this.state.loading ? 'text-center py-5' : 'd-none'}>
            <Spinner animation="border" variant="primary" />
          </div>
          <Refrigerantes isLoading={this.state.loading} refrigerantes={this.state.refrigerantes} handleSelecionarRefrigerante={this.handleSelecionarRefrigerante} handleCurtirRefrigerante={this.handleCurtirRefrigerante} />
        </Container>
      </div>
    )
  }

}

export default App;