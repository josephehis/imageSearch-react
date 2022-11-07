
import React from 'react';

class InputComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }

    // forms 
    // 1. Controlled vs Uncontrolled component

    handleInputChange=(event)=>{
            this.setState({inputValue:event.target.value});
    }

    // sendUserData(event){
    //     event.preventDefault();

    //     console.log(this.props);
    //     this.props.sendUserInput(this.state.inputValue)
    // }


    render(){
        return(
            <div className='inputDiv'>
                <div style={{width:'60%'}}>

                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        this.props.sendUserInput(this.state.inputValue)
                    }}>
                        <p style={{fontweight:'bold', fontSize:'20px'}}> 
                            Image Search
                        </p>                 
                        <input id='inputTag'  onChange={this.handleInputChange} className='input' value={this.inputValue}/>
                    </form>
                    
                </div>               
            </div> 
        )
    }
}

export default InputComponent;