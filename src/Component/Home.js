import React,{Component} from 'react'
import {Link, withRouter} from "react-router-dom";
import NavbarMain from "./NavbarMain";
import '../css/navbar.css'
import {Row,Col,Icon} from 'react-materialize'
import ListProducts from "./ListProducts";
class Home extends Component{




  render() {
    return(
      <>
        <NavbarMain/>
        <h3>Bienvenido administrador</h3>
        <Row>
          <Col s={12} l={3} offset="l3">
            <Link to="/addProduct" className="App-link">
              <Icon large>
                add
              </Icon>
              <h5>Agrega Productos</h5>
            </Link>
          </Col>
          <Col s={12} l={3}   >
            <Link to="/listProduct"  className="App-link">
              <Icon large >
                 view_module
              </Icon>
              <h5>Mostrar Productos</h5>
            </Link>
          </Col>
        </Row>
      </>
    )
  }

}

export default Home