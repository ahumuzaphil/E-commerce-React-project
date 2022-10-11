import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Shirts from './Shirts.js';
import Pants from './Pants';
import { Route,Routes} from "react-router-dom";
import allItem from "./datas.js"
import allPants from "./datap.js"
import navfunction from './navfunction';


function App() {
const [isItem, setIsItem] = React.useState([allItem, allPants,navfunction])

 const parentArray = isItem[2]
 const childArray=parentArray[0].count

console.log(childArray + 1)

function Shop(e){
  e.preventDefault();
  setIsItem(prevIsItem =>{
    return(
      childArray + 1
    )
  })
} 

const navfun = isItem[2].map(items =>{
  return(
    <Navbar 
    key ={items.work}
    item ={items}
    
    />
  )
})

const itemElement = isItem[0].map(items =>{
  return(
    <div>
    <Shirts
    key={items.id} 
    item={items}
    onclick={Shop}
    />
    </div>
  )
})
const pantsElement = isItem[1].map(items =>{
  return(
    <div>
    <Pants
    key={items.num} 
    item={items}
    onclick={Shop}
    />
    </div>
  )
})

 /* let component 
  switch(window.location.pathname){
    case "/home":
      component = <Home />
      break
      case "/shirts":
        component = <Shirts />
        break
        case "/pants":
          component = <Pants />
  }*/
  return (
    <div>
    {navfun}
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/shirts' element=<section className='container_item'>{itemElement}</section> />
    <Route path='/pants' element= <section className='container_item'>{pantsElement}</section> />
    <Route path='/check' element= <section className='container_item'>{itemElement}</section>/>
    </Routes>
    </div>
  );
}

export default App;
