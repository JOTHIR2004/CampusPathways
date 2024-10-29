import React, { Component } from "react";


class Card extends Component {
    render() {
        const { title, desc, img, button } = this.props;
       
        
        return (
            <div className="card">
                {img && <img src={img} alt={title} className="card-image" />}
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-desc">{desc}</p>
                    <button className="card-button">{button}</button>
                </div>    
            </div>
        );
    }
}

export default Card;
