import React from 'react';

function MouseHoverDemo() {
 const handleMouseOver = () => {
   console.log('Mouse over event triggered!');
 };

 return (
   <button onMouseOver={handleMouseOver}>
     Hover over me
   </button>
 );
}

export default MouseHoverDemo; 
