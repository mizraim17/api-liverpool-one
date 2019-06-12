import React,{Component} from 'react';
import axios from 'axios';
import {Card,Col,Row,CardTitle, Button,Modal,TextInput} from 'react-materialize'
import '../css/listProduct.css';
import NavbarSecondary from "./NavbarSecondary";
import  M from 'materialize-css';
import Loader from "react-loader-spinner";

class  ListProducts extends Component{

  state={
    products:"",loading:false,
    form:{},idProductEdit:""
  }

  getProducts=()=>{

    axios.get("https://back-liverpool.herokuapp.com/api/product")
    .then((res)=>{
      console.log("res request", res.data)
      this.setState({products:res.data})

      this.setState({loading:false})
    })

    .catch((err)=>{
      console.log(err)
    })
  }

  deleteProduct=(e)=>{
    let idProduct=e.target.id;
    console.log(e.target.id)
    axios.delete(`https://back-liverpool.herokuapp.com/api/product/${idProduct}`)
      .then((res)=>{
        console.log("res delete",res.data)
        this.getProducts()
      })
      .catch(err=>console.log(err))
  }

  componentWillMount() {
    this.setState({loading:true})
    M.AutoInit()
    this.getProducts()
  }

  handleform=(e)=>{
    let {form} =this.state;

    let {name,value}=e.target;
    form[name]= value;
    console.log("campos",form)
    this.setState({  form});
  }

  submitEdit = ()=>{
    let {idProductEdit,form}=this.state;
    console.log("idProductEdit",idProductEdit)
    axios.put(`http://localhost:3005/api/product/${idProductEdit}`,form)
      .then((res)=>{
        console.log("res edit",res.data)
        this.getProducts()
      })
      .catch(err=>console.log(err))
  }

  handleId=(e)=>{
    let {idProductEdit}=this.state
    idProductEdit=e.target.id;
    this.setState({idProductEdit})
  }

  render() {
    let {products,loading}= this.state;
    return(
      <>
        <NavbarSecondary/>
        {
          loading
          ?
          <Loader
            type="Rings"
            color="#ffffff"
            height="400"
            width="400"
          />
          :
          <Row className="container pt">
            {
              products?
                products.map((el,i)=>{
                  return(
                    <Col m={3} s={12}  className="container  ">
                      <Card
                        key={i}
                        className='small'
                        header={
                          <CardTitle  className="txtcard small"  >
                            <img className="responsive-img" src={el.image} alt=""/>
                          </CardTitle>
                        }
                        actions={
                          <>
                            <span className=" txt-name">{el.name}</span> <br/>
                            <span className=" txt-price">{`$ ${el.price}`}</span>
                          </>
                        }>
                      </Card>
                      <Button className="liv-red" id={el._id} onClick={this.deleteProduct}> borrar</Button>
                      <Button  href="#modal1" className="modal-trigger" id={el._id} onClick={this.handleId}> editar</Button>
                    </Col>
                  )
                })
              :<h3>Aún no tienes productos para mostrar</h3>
            }
            <Modal id="modal1" header="Editar Productos">
              <div>
                <form onSubmit={this.submitEdit}>
                  <TextInput
                    s={12}
                    name="name"

                    type="text"
                    onChange={this.handleform}
                    label="nombre del producto"
                  />
                  <TextInput
                    s={12}
                    name="price"

                    type="number"
                    onChange={this.handleform}
                    label="precio"
                  />
                  <div>
                    <Button  > editar</Button>
                  </div>
                </form>
              </div>
            </Modal>
          </Row>
        }
      </>
    )
  }
}

export default ListProducts