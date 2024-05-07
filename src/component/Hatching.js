import React from 'react';

function Hatching(props){
    const divStyle = {
        backgroundImage: 'url(assets/hash.png)',
        zIndex: 0, 
        width: props.width + "%",
        height: props.height + "%",
        position: 'absolute',
        top: props.top + "px",
        left: props.left + "%",
      };
    return (
        <div style={divStyle}></div>
    )
}

export default Hatching;