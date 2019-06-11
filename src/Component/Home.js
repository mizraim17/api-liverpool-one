import React,{Component} from 'react'
import axios from 'axios'
import NavbarMain from "./NavbarMain";
import '../css/navbar.css'

class Home extends Component{




  render() {
    return(
      <>
        <NavbarMain/>
        <h1>Bienvenido administrador</h1>
        <button onClick={this.addProduct}> post</button>
      </>
    )
  }

}

export default Home