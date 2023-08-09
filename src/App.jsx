//MUTATING OBJECTS//
//UPDATING OBJECTS//
//UPDATING NESTED OBJECTS//

// const App = () => {
// const [customer, setCustomer] = useState({
//   name: "John",
//   address: { city: "NewYork", zipcode: 91218 },
// });
//   const handleOnClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, city: "Karachi" },
//     });
//   };
//   return (
//     <div>
//       <h1>{customer.address.city}</h1>
//       <button onClick={handleOnClick}>Click Me</button>
//     </div>
//   );
// };

//MUTATING ARRAYS//
//UPDATING ARRAYS

// const App = () => {
//   const [animal, setAnimal] = useState(["cat", "dog"]);

//   const handleOnClick = () => {
//ADD//
// setAnimal([...animal, "bork", "mog"]);
//REMOVE//
// setAnimal([animal.filter((ani) => ani !== "cat")]);
//UPDATE//
// setAnimal([animal.map((ani) => (ani === "dog" ? "lion" : ani))]);
// };

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug1", isFixed: false },
//     { id: 2, title: "Bug2", isFixed: false },
//   ]);
//   console.log(bugs);

//   const handleOnClick = () => {
//     setBugs(
//       bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
//     );
//   };

//   return (
//     <div>
//       <h1></h1>
//       <button onClick={handleOnClick}>Click Me</button>
//     </div>
//   );
// };

//Mutatiion Exercise//

// const App = () => {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "john",
//     },
//   });
//   const handleOnClick = () => {
//     setGame({
//       ...game,
//       player: { ...game.player, name: "usama" },
//     });
//   };
//   console.log(game);
//   return (
//     <div>
//       <h1>{game.player.name}</h1>
//       <button onClick={handleOnClick}>Change Player</button>
//     </div>
//   );
// };

//Mutation Exercise//

// const App = () => {
//   const [pizza, setPizza] = useState({
//     name: "spicy pepporoni",
//     toppings: ["Mushroom"],
//   });
//   const handleOnClick = () => {
//     setPizza({
//       ...pizza,
//       toppings: [...pizza.toppings, "Cheese", "Tofu"],
//     });
//   };
//   return (
//     <div>
//       <ul>{pizza.toppings.map((topping) => <li>{topping}</li>)}</ul>
//       <button onClick={handleOnClick}>Change Player</button>
//     </div>
//   );
// };

//Mutation Exercises//

// const App = () => {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//       { id: 3, title: "Product 3", quantity: 1 },
//     ],
//   });
//   const handleOnClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };
//   return (
//     <div>
//       <ul>
//         {cart.items.map((item) => (
//           <li key={item.id}>
//             {item.title} {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleOnClick}>Increase Quantity</button>
//     </div>
//   );
// };

// export default App;

import Form from "./Form";
import CardComponent from "./CardComponent";

const App = () => {
  return (
    <div style={{display:'flex'}}>
      <Form />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default App;
