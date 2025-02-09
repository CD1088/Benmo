import { use } from 'react';
import RenderFoodItem from './foodItem'

function PrintItems({items, user}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Cost</th>
                </tr>
                {items.map((val, key) => {
                    return (
                        <RenderFoodItem foodItem={val} user={user} />
                    )
                })}
            </table>
        </div>
    );
}

export default PrintItems;
