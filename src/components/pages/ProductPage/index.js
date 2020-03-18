import React, { Component } from 'react';
import { connect } from 'react-redux';
import base64 from 'base-64';

import { fetchProductInfo } from '../../../store/actions/product';

import isEmpty from '../../../validations/isEmpty';
import ProductImg from './ProductImg';

class ProductPage extends Component {
  // state = {
  //   productInfo : undefined
  // }
  
  componentDidMount() {
    const { productInfo, fetchProductInfo } = this.props;
    
    const pathName = window.location.pathname;
    const productAlias = base64.encode(pathName.replace("/new-floweraura/", ""));        
    if (isEmpty(productInfo.title) || productInfo.title === 0) {
      fetchProductInfo(productAlias).then(result => {
        // this.setState({productInfo: result})
        // this._handleAfterProductLoad(result, pathName);
      }).catch(() => {
        // handle errors or create error boundries
      })
    } 

  }


  render() {
    
    return (
      <>
        <h2>Hello I am Product Page</h2>
        {/* <ProductImg  
          productInfo={this.state.productInfo}
        /> */}
      </>
    );
  }
}


const mapStateToProps = state => {  
  return {
    productInfo: state.product    
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    fetchProductInfo: (productAlias) => dispatch(fetchProductInfo(productAlias))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
