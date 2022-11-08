import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }

handleModal(){
  this.setState({showModal: !this.state.showModal})
}

  render(){
    return(
      <div>
      <Button onClick={()=>this.handleModal()}>Abrir modal</Button>
      <Modal show= {this.state.showModal} onHide= {()=>this.handleModal()}>
        <Modal.Header closeButton>
          Modal header
        </Modal.Header>
        <Modal.Body>
          Body del Modal
        </Modal.Body>
        <Modal.Footer>
          <Button>Aceptar</Button>
          <Button onClick={()=>this.handleModal()}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

export default App;
