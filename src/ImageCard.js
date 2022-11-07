
import React,{createRef} from 'react'

class ImageCard extends React.Component {

    constructor(props){
        super(props)
        this.imageRef= createRef(); 
        this.state={
            gridRowSpan:0
        }   
    }
    // ref

    // lifecycle 

    // mounting phase methods
    // constructor is for initializing state
    // static getDerivedStateFromProps
    // render
    // componentDidMount
   componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setgridRowSpan)
   } 

   setgridRowSpan=()=>{

    const imageHeight= this.imageRef.current.clientHeight;

    const setgridRowSpan= Math.ceil(imageHeight/10)

    this.setState({ gridRowSpan:setgridRowSpan})
   }

  render() {
      const {description, imageUrl}= this.props;
    return (
      <div style={{gridRowEnd:`span ${this.state.gridRowSpan}`}}>
          <img ref={this.imageRef} className='images' src={imageUrl} alt={description} />
      </div>
    )
  }
}

export default ImageCard