
import React from 'react';

import InputComponent from './InputComponent';
import ImageList from './ImageList';

import axios from 'axios';

import './Style.css'

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            searchResults:[]
        }
    }
    // https://api.unsplash.com/
    // OxY6W5cnvd-G6ewihYgcyUjWswIuAV16HfAtt6XuXiM

    fetchImage=(userInput)=>{
        axios.get(`https://api.unsplash.com/search/photos?query=${userInput}`,
        {   
            headers:{
                Authorization:'Client-ID 5SsVL47Xm68quO5PyCBLSif893SE4tIdzdVUfgDNoLU'
            }
        }).then(response=>{
            this.setState({searchResults:response.data.results})
        }).catch(error=> console.log(error))
    } 
   
    render(){
        return(
            <div>
                <InputComponent
                 sendUserInput={this.fetchImage} />
                 <ImageList userResults={this.state.searchResults}/>
            </div>
        )
    }
}

export default App;