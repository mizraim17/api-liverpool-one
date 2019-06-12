import React,{Component} from 'react';
import axios from 'axios';
import {Card,Col,Row,CardTitle} from 'react-materialize'
import '../css/listProduct.css'

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
    this.getProducts()
  }

  render() {
    let {products}= this.state;
    return(
      <Row className="container pt">
        {
          products?
          products.map((el,i)=>{
            return(

                <Col m={3} s={12}  className="container color-liv2">
                  <Card
                    key={i}
                    className='small'
                    header={
                      <CardTitle  className="txtcard " image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0JquDcM1LE2U18FaUqyw4uD6p9eze0cMerG6xvwQboQZZ_bJlTbeEOrM_BwBsD4BqziXk-sWIkXnE0obTadYJ4JKxnPPu_1cEj1UkwBHqVQbBh7oNV4l2&usqp=CAc">
                      </CardTitle>
                    }
                    actions={
                      <>
                        <span className=" ">{el.name}</span> <br/>
                        <span className=" txt-price">{`$ ${el.price}`}</span>
                      </>
                    }>
                  </Card>
                  <button id={el._id} onClick={this.deleteProduct}> borrar</button>
                </Col>

            )
          })
          :<h3>Aún no tienes productos para mostrar</h3>
        }
      </Row>
    )
  }
}



export default ListProducts