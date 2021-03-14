import React from 'react'
import FoodForm from './FoodForm'
import FoodList from './FoodList'
 
class App extends React.Component{

  state ={
    foodItems: [
      {id: 1, name: 'Grilled fish'},
      {id: 2, name: 'canned milk'},
      {id: 3, name: 'frozen bacon'},
      {id: 4, name: 'fried sabastein'},
    ]
  }


  addFoodItem =(incomingState)=>{
    let newId = this.state.foodItems.length + 1
    const {name} = incomingState
    let newFood = {id: newId, name: name}
    this.setState({
      foodItems: [...this.state.foodItems, newFood]
    })
    
    console.log(newFood)
  }

  render(){
    return(
      <div>
        <FoodList item={this.state.foodItems}/>

        <FoodForm addFoodItem={this.addFoodItem}/>
      </div>
    )
  }
};


export default App;


