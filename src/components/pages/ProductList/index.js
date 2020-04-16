import React, { Component } from 'react';
import { withCookies } from "react-cookie";
import { connect } from 'react-redux';

import { frontloadConnect } from 'react-frontload';

import { fetchProductList } from '../../../store/actions/productList';

import RepeatProduct from '../ProductList/RepeatProduct';
import { withRouter } from 'react-router';

import isEmpty from '../../../validations/isEmpty';

import './index.css';


class ProductList extends Component {
  
  componentDidMount(){
    const { productList, fetchProductList } = this.props;
    
    if (productList.header === '') {
      fetchProductList();
    }        
}
  
  
  render() {
    let {node, header, footer} = this.props.productList;
    
    return (
      <>
        <h2>Hello I am Product List Page</h2>
        <RepeatProduct 
          productList = {node}
        />
      </>
    );
      
  }
}

const mapStateToProps = state => {  
  return {
    productList: state.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    fetchProductList: () => dispatch(fetchProductList())
  }
}


const frontload = async (props) => {
  let { fetchProductList} = props;

  // return fetchProductList();

  return await fetchProductList().then((result) => {
    const { product } = result;
    console.log('product', product);

  }).catch((err) => {    
    console.info(`Product info api is not working. Having Trouble For-- pathName:`, err);
  });
}


export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload,{
  onMount: true,
  onUpdate: false
})(withCookies(withRouter(ProductList))));
