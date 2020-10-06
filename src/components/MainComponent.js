import React , {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import { DISHES } from '../shared/dishes';
import  Dishdetail from './DishdetailComponent ';

function Main() {
  const [dishes,setdish] = useState(DISHES);
  const [selecteddish,setSelecteddish] = useState(null);
  function onDishSelected(dishId){
    setSelecteddish(dishId);
}
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {dishes}
          onClick={(dishId)=>onDishSelected(dishId)}
      />
      <Dishdetail 
      dish={dishes.filter((dish)=>dish.id === selecteddish)[0]}/>
    </div>
  );
}

export default Main;
