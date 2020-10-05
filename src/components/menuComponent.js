import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import  Dishdetail from './DishdetailComponent ';

function Menu(props) {
    const [selectedDish, setSelecteddish] = useState(null);
    function onDishSelected(dish){
        setSelecteddish(dish);
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
                    <Dishdetail dish = {selectedDish} />
                
        </div>
    );

    
}



export default Menu;