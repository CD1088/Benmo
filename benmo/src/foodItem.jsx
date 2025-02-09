import React from "react";

function RenderFoodItem({ foodItem, user }) {

    console.log(user);
    const handleClick = () => {
        console.log(foodItem.owner);
        foodItem.owner = user;
        // this.color = "blue";
    };
    const isOwner = (foodItem.owner === user);
    const newColor = isOwner ? "blue" : "black";

    return (
        <tr onClick={handleClick}>
            <td  color = {newColor} >{foodItem.name}</td>
            <td style={{color : "${(foodItem.owner === user) ? 'blue' : 'black'}"}}>Text</td>
            <td>{foodItem.cost}</td>
        </tr>
    );
}

export default RenderFoodItem;
