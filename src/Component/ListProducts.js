import React,{Component} from 'react';
import axios from 'axios';
import {Card,Col,Row,CardTitle, Button,Modal,TextInput} from 'react-materialize'
import '../css/listProduct.css'
import NavbarSecondary from "./NavbarSecondary";
import  M from 'materialize-css'
class  ListProducts extends Component{

  state={
    products:"",
    form:{},idProductEdit:""
  }

  getProducts=()=>{
    axios.get("http://localhost:3005/api/product")
      .then((res)=>{
        console.log("res request", res.data)
        this.setState({products:res.data})
      })

      .catch((err)=>{
        console.log(err)
      })
  }

  deleteProduct=(e)=>{
    let idProduct=e.target.id;
    console.log(e.target.id)
    axios.delete(`http://localhost:3005/api/product/${idProduct}`)
      .then((res)=>{
        console.log("res delete",res.data)
        this.getProducts()
      })
      .catch(err=>console.log(err))
  }

  componentWillMount() {
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
    let {products}= this.state;
    return(
      <>
        <NavbarSecondary/>
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

        <Modal id="modal1" header="Modal Header">
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
      </>
    )
  }
}



export default ListProducts