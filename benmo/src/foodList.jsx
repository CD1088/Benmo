import RenderFoodItem from './foodItem'

function PrintItems(items, user) {
    return (
        <div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Cost</th>
                </tr>
                <RenderFoodItem foodItem={items[0]} user={user} />
                <RenderFoodItem foodItem={items[1]} user={user} />
                <RenderFoodItem foodItem={items[2]} user={user} />
            </table>
        </div>
    );
}

export default PrintItems;
