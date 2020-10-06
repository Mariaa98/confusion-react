import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

function Menu(props) {
    
    

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card onClick={()=>props.onClick(dish.id)}>

                    <CardImg src={dish.image} alt={dish.name} />

                    <CardImgOverlay body className="ml-5">
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>

                </Card>
            </div>
        );
    });
  
    return (
        <div className="container">
            <div className="row">

                {menu}
            </div>
                
        </div>
    );

    
}



export default Menu;