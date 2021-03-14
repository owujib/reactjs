import React from 'react'

class FoodForm extends React.Component{
    state ={
        name: ''
    }

    handleInputChange =(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.addFoodItem(this.state)
        this.setState({
            name: ''
        })
    }


    render(){
        
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text" 
                        name="name" id="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <input type="submit" value="add food item"/>
                </form>
            </div>
        )
    }
}

export default FoodForm