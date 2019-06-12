import React, {Component} from 'react'
import {TextInput,Button,Row,Card } from 'react-materialize'
import axios from "axios";
import '../css/addProducts.css'
import NavbarSecondary from "./NavbarSecondary";
import M from 'materialize-css'


class AddProducts extends Component{

  state={
    form:{}
  }

  getSubmit= (e)=> {
    e.preventDefault()
    let {form}= this.state

    axios.post("http://localhost:3005/api/product",form)
    .then((res)=>{
      window.Materialize.toast("El producto se ha agregado correctamente")
      this.rebootForm()
      console.log("%c pucho","color:blue",form)
    })
  }

  rebootForm=()=>{
    let temPfor=document.getElementsByClassName("formu")
    temPfor[0].value="";
    temPfor[1].value="";
    temPfor[2].value="";
  }

  handleChange= (e)=> {
    let {form} = this.state
    let {name, value} = e.target
    form[name] = value;

    this.setState(form)
    console.log("%c form ", "color:orange", form)
  }


    componentWillMount() {
      M.AutoInit()
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
                className="formu"
                s={12} m={4}
                name="name"
                onChange={this.handleChange}
                label="Nombre del producto"
              />
              <TextInput
                className="formu"
                s={12} m={4}
                name="price"
                onChange={this.handleChange}
                label="Precio"
              />
              <TextInput
                className="formu"
                s={12} m={4}
                name="image"
                onChange={this.handleChange}
                label="pega la url de tu imagen"
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
