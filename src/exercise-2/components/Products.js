import React, {Component} from 'react';
import DataList from '../mockups/data.json'
import {BrowserRouter,Route,Link} from 'react-router-dom';

class Products extends Component{
    constructor() {
        super();
     this.state= {
         produtsList: DataList,
     }
    }
    showDetails(){

    }
    render(){
        const id = this.props.match.params.id;
        return (
            <div>
                <div className={'products'}>
                    <p className={'p1'}>All Products</p>
                    <p><Link to={`/products/${this.state.produtsList.bicycle.id}`} onClick={this.showDetails}>Bicycle</Link></p>
                    <p><Link to={`/products/${this.state.produtsList.TV.id}`}>TV</Link></p>
                    <p><Link to={`/products/${this.state.produtsList.pencil.id}`}>Pencil</Link></p>

                </div>
                <div className={'details'}>
                        <p>Product Details: </p>
                        <p>Name:</p>
                        <p>Id:{id}</p>
                        <p>Price:</p>
                        <p>Quantity:</p>
                        <p>Desc:</p>
                        <p>:products/{id}</p>

                </div>

            </div>


        );
    }
}
export default Products;