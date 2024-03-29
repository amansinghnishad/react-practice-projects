import Item from "./item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} items={items}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
