import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

function Menu(props) {
    const [selectedDish, setSelecteddish] = useState(null);
    function onDishSelected(dish){
        setSelecteddish(dish);
    }

   function renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return (
            <div></div>
        );
    }

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => onDishSelected(dish)}>

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
            <div className="row">
                <div className="col-md-12 col-md-5 m-1">
                    {renderDish(selectedDish)}
                </div>
            </div>
        </div>
    );

    
}



export default Menu;