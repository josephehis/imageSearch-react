
import React from 'react'

import ImageCard from './ImageCard';

const ImageList = ({userResults}) => {
// description, imageUrl

  const images= userResults.map(({alt_description, id, urls})=><ImageCard key={id} description={alt_description} imageUrl={urls.regular}/>);
  return (
    <div id='imageWrapper'>
      {images}
    </div>
  )
}
     
export default ImageList;
