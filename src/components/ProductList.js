import React, { Component } from 'react';

import {Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle, Button, Breadcrumb, BreadcrumbItem
    } from 'reactstrap';

import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
              
    }

    
  renderProduct(product) {
      if (product!= null)
          return(
              <Card>
                  <CardImg top src={product.image} alt={product.name} />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

    render() {

        

        const list = this.props.products.map((product) => {
            return (
                <div  className="container col-sm-3 m-3 ">
                <Card key={product.id} onClick={() => this.props.onClick(product)}>
                  <CardImg width="100%" src={product.image} alt={product.name} />
                  <CardTitle>{product.name}</CardTitle>
                  <Button size="sm" color="info">Show Detail</Button>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Products</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Products</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {list}
                </div>
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    
                    {this.renderProduct(this.props.selectedProduct)}
                  </div>
                </div>
          </div>
        );
    }
}

export default ProductList;
