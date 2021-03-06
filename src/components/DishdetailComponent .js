import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

function renderDishdetail(dish) {
    //const [dish] = useState(props.dish);

    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );

    }
    return (
        <div></div>
    );
}
function renderComments(comments) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} ,{new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}</p>      
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    else{
        return(
       <div></div>
        );
    }
}
function Dishdetail(props) {
    if (props.dish != null) {
        return (<div className="container">
            <div className="row">
                {renderDishdetail(props.dish)}
                {renderComments(props.dish.comments)}
            </div>
        </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}
export default Dishdetail;