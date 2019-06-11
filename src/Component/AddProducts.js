import React, {Component} from 'react'
import {TextInput,Button,Row } from 'react-materialize'
import NavbarMain from "./NavbarMain";
import axios from "axios";

class AddProducts extends Component{

  state={
    form:{}
  }

  getSubmit= (e)=> {
    e.preventDefault()
    let {form}= this.state

    axios.post("http://localhost:3005/api/product",form)
    .then((res)=>{
      console.log("%c pucho","color:blue",res.data)
    })

  }

  handleChange= (e)=> {

    let {form} = this.state
    let {name,value}= e.target
    form[name]=value;

    this.setState(form)
    console.log("%c form ","color:orange", form)

  }


  render() {
    return(
      <>
        <NavbarMain/>
        <Row className="container">
          <form onSubmit={this.getSubmit} >
            <TextInput
              className="conEm"
              s={12} m={3}
              name="name"
              onChange={this.handleChange}
              label="Nombre del producto"
            />
            <TextInput
              className="conEm"
              s={12} m={3}
              name="price"
              onChange={this.handleChange}
              label="precio"
            />
            <div>
              <Button>
                Guardar
              </Button>
            </div>
          </form>
        </Row>

      </>

    )

  }
}

export default AddProducts
