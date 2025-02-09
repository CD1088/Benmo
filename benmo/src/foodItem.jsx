import React from "react";

function RenderFoodItem({ foodItem, user }) {
    return (
        <tr>
            <td>{foodItem.name}</td>
            <td>{foodItem.cost}</td>
        </tr>
    );
}

export default RenderFoodItem;
