import React,{Component} from 'react'
import {Link} from "react-router-dom";
import NavbarMain from "./NavbarMain";
import '../css/navbar.css'
import {Row,Col,Icon} from 'react-materialize'
class Home extends Component{




  render() {
    return(
      <>
        <NavbarMain/>
        <h3>Bienvenido administrador</h3>
        <Row>
          <Col s={12} l={3} offset="l3">
            <a href="/addProduct" className="App-link" >
              <Icon large>
                add
              </Icon>
              <h5>Agrega Productos</h5>
            </a>
          </Col>
          <Col s={12} l={3}   >
            <a href="/listProduct" className="App-link"  >
              <Icon large >
                 view_module
              </Icon>
              <h5>Mostrar Productos</h5>
            </a>
          </Col>
        </Row>
      </>
    )
  }

}

export default Home