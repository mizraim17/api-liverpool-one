import React,{Component} from 'react';
import axios from 'axios';
import {Card,Col,Row,CardTitle, Button,Modal} from 'react-materialize'
import '../css/listProduct.css'
import NavbarSecondary from "./NavbarSecondary";
import  M from 'materialize-css'
class  ListProducts extends Component{

  state={
    products:""
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
                      <CardTitle  className="txtcard responsive-img" image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0JquDcM1LE2U18FaUqyw4uD6p9eze0cMerG6xvwQboQZZ_bJlTbeEOrM_BwBsD4BqziXk-sWIkXnE0obTadYJ4JKxnPPu_1cEj1UkwBHqVQbBh7oNV4l2&usqp=CAc">
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
                  <Button className="liv-dark" id={el._id} onClick={this.deleteProduct}> edit</Button>
                </Col>

            )
          })
          :<h3>Aún no tienes productos para mostrar</h3>
        }
          <div>
            <a href="#modal1" className="modal-trigger">

              Show Modal

            </a>
            <Modal id="modal1" header="Modal Header">
              Lorem ipsum dolor sit amet
            </Modal>
          </div>
      </Row>
      </>
    )
  }
}



export default ListProducts