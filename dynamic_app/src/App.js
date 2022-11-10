import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Shirts from './Shirts.js'
import Pants from './Pants'
import { Route, Routes } from 'react-router-dom'
import allItem from './datas.js'
import allPants from './datap.js'
import navfunction from './navfunction'

function App() {
  // const [isItem, setIsItem] = React.useState([allItem , allPants , navfunction])
  const [ isNavFunc, setIsNavFunc ] = React.useState(navfunction);

  const parentArray = isNavFunc
  const childArray = parentArray[0].count

  function Shop(item) {
    setIsNavFunc(
      isNavFunc.map((obj) => {
        if(obj.count === childArray){
          let newAmount = obj.amount + item.price;
          return { ...obj, count: childArray + 1, amount: Math.round(newAmount * 100)/100 }
          // this bit Math.round(newAmount * 100)/100 is just to round off the amount to 1 decimal place 
          // but the importnat bit is the newAmount variable 
        }
        return obj
      })
    )
  }

  const navfun = isNavFunc.map((items) => {
    return <Navbar key={items.work} item={items} />
  })

  const itemElement = allItem.map((items) => {
    return (
      <div>
        <Shirts key={items.id} item={items} 
        onclick={() => {
          Shop(items); 
          }} />
      </div>
    )
  })
  const pantsElement = allPants.map((items) => {
    return (
      <div>
        <Pants key={items.num} item={items} onclick={() => Shop(items)} />
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
        <Route
          path='/shirts'
          element=<section className='container_item'>{itemElement}</section>
        />
        <Route
          path='/pants'
          element=<section className='container_item'>{pantsElement}</section>
        />
        <Route
          path='/check'
          element=<section className='container_item'>{itemElement}</section>
        />
      </Routes>
    </div>
  )
}

export default App
