import React from 'react'

class FoodList extends React.Component {
    render(){

        const {item} = this.props;
        
        const itemList = item.map((data) =>{
            console.log(data)
            return <li key={data.id} >{data.name}</li>
        });

        return(
            <div>
                <ul>
                   {itemList}
                </ul>
            </div>
        );
    };
}

export default FoodList