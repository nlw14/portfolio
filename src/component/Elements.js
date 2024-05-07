import React from "react";



function TitreBalise(props){
    if(props.age){
        return (
            <h1 className="titre"><div className="chevron">&lt;</div>{props.titre}<div className="chevron">/&gt;<div className="age">({props.age}ans)</div></div></h1>
        )
    }else{
        return (
            <h1 className="titre"><div className="chevron">&lt;</div>{props.titre}<div className="chevron">/&gt;</div></h1>
        )
    }
   
}

function Balise(props){
    let className = "date "+props.addClass;

    if(props.content){
        return (
            <div className={className}>
                <p className="balise"><div className="chevron text">&lt;</div>{props.nom}<div className="chevron text">&gt;</div></p>
                <div className="content">{props.content}</div>
                <p className="balise"><div className="chevron text">&lt;</div>{props.nom}<div className="chevron text">/&gt;</div></p>
            </div>
        )
    }else if(props.close === "true"){
        return (
            <p className="balise"><div className="chevron text">&lt;</div>{props.nom}<div className="chevron text">/&gt;</div></p>
        )
    }else{
        return (
            <p className="balise"><div className="chevron text">&lt;</div>{props.nom}<div className="chevron text">&gt;</div></p>
        )
    }  
}

function WhiteSpace(props){
    const divStyle = {
        height : props.px + "px",
    }
    return(
        <div style={divStyle}></div>
    )
}

const Elements = {TitreBalise, Balise, WhiteSpace};
export default Elements;