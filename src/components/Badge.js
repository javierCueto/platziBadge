import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'



class Badge extends React.Component{
    render(){
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                <h1>Javier <br/>Cueto</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Software Enginner</h3>
                <div>@JJavierCueto</div>
            </div>

            <div className="Badge__footer">#platziconf</div>
        </div>
        )
    }
}


export default Badge;