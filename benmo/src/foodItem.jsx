import React, { useEffect } from "react";

function RenderFoodItem({ foodItem, user }) {
    // useEffect(() => {
    //     console.log("Clicked!")
    // })
    const isOwner = (foodItem.owner === user);
    if (isOwner) {
        return (
            <tr>
                <td style={{ color: "red" }}>{foodItem.name}</td>
                <td>{foodItem.cost}</td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td style={{ color: "black" }}>{foodItem.name}</td>
                <td>{foodItem.cost}</td>
            </tr>
        );
    }
}

export default RenderFoodItem;
