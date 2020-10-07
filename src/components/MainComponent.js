import React , {useState} from 'react';
import Menu from './menuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header/>
      <Menu dishes = {dishes}
          onClick={(dishId)=>onDishSelected(dishId)}
      />
      <Dishdetail 
      dish={dishes.filter((dish)=>dish.id === selecteddish)[0]}/>
      <Footer/>
    </div>
  );
}

export default Main;
