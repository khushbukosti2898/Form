import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { render } from '@testing-library/react';
class FormData extends React.Component{
    state={
        firstname:'',
        lastname:'',
        show:false
    }

    getData=(e)=>{
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value}); 
    }

    display=()=>{
        this.setState({show:true});
    }
    render(){
        
        return <div><App getData={this.getData} display={this.display}  />
        { this.state.show &&
            <div>
            <h1>{this.state.firstname}</h1>
            <h1>{this.state.lastname}</h1>
            </div>
        }

        </div>
    }
} 


ReactDOM.render(<FormData />, document.getElementById('root'));
serviceWorker.unregister();
