import React, { Component } from 'react';
import { withCookies } from "react-cookie";
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { withRouter } from 'react-router';

import { fetchCounterList } from '../../../store/actions/counterList';

import isEmpty from '../../../validations/isEmpty';

class CounterPage extends Component{
    
    componentDidMount(){
        const { counterList, fetchCounterList } = this.props;
        // console.log(this.props)
        if (counterList.counter === null) {
            fetchCounterList();
        }        
    }

    render(){        
        let { counter } = this.props.counterList;

        return(
            <>
                <h2>I am counter Page</h2>
                <h2>{counter !== null ? counter.name : 'khan'}</h2>
                <div>
                    <img src="https://img.floweraura.com/sites/default/files/designer_cakes_m.jpg" />
                </div>
            </>
        );
    }
}


const mapStateToProps = state => {  
    return {
        counterList: state.counterList
    }
}
  
const mapDispatchToProps = dispatch => {
    return {    
        fetchCounterList: () => dispatch(fetchCounterList())
    }
}

const frontload = (props) => {
    let { fetchCounterList } = props;
    

    return fetchCounterList().then(() => {
        console.log('Heyyyy...')
    }).catch(() => {
        
    })

    // const pathname = props.location.pathname.replace('/','');
  
    // console.log('Product data before hitting api -', pathname, props);
  
    // if (!isEmpty(pathname)) {
      
    //   return fetchCounterList(pathname).then(async (result) => {
    //     // Handle anything
        
    //   }).catch((err) => {
    //     console.info(`Product landing page api is not working. Having Trouble For-- pathName: ${pathname}`, err);
    //   });
    // }
}



export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload,{
    onMount: true,
    onUpdate: false
})(withCookies(withRouter(CounterPage))));

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CounterPage));
