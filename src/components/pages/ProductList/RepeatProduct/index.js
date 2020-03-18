import React, { Component } from 'react';

import isEmpty from '../../../../validations/isEmpty';

class RepeatProduct extends Component {

    render(){        
        let listItem = this.props.productList;
        // console.log('listItem', listItem);
        let repeatLiDOM = '';

        if(!isEmpty(listItem)){
            repeatLiDOM = listItem.map( (item) => {                
                let nodeItem = item.node;
                return(
                    <li key={nodeItem.id}>
                        <a href={nodeItem.alias}>
                            <figure>
                                <img src={nodeItem.image[0].src} alt={nodeItem.title} />
                            </figure>
                            <div className="nameProduct">
                                <h5>{nodeItem.title}</h5>
                                <strong>{nodeItem.sell_price}</strong>
                            </div>
                        </a>
                    </li>
                );                
            })
        }

        

        return(
            <div className="repaetBox">
                <ul className="repeatUl">
                    {repeatLiDOM}
                </ul>
            </div>
        );
    }
}

export default RepeatProduct;