import React, {Component} from 'react'
import {TextInput,Button,Row,Card } from 'react-materialize'
import axios from "axios";
import '../css/addProducts.css'
import NavbarSecondary from "./NavbarSecondary";

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
        <NavbarSecondary/>
        <Row className=" container padt">
          <Card className="z-depth-3 ">
            <Row className="container">
            <form onSubmit={this.getSubmit} >
              <TextInput
                className="conEm"
                s={12} m={4}
                name="name"
                onChange={this.handleChange}
                label="Nombre del producto"
              />
              <TextInput
                className="conEm"
                s={12} m={4}
                name="price"
                onChange={this.handleChange}
                label="Precio"
              />
              <TextInput
                className="conEm"
                s={12} m={4}
                name="image"
                onChange={this.handleChange}
                label="recio"
              />
              <div>
                <Button className="color-liv2">
                  Guardar
                </Button>
              </div>
            </form>
          </Row>
          </Card>
        </Row>
      </>

    )

  }
}

export default AddProducts
