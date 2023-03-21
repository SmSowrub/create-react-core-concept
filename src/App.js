
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const Products=[
    {name:'Iphone', price:'120000'},
    {name:'Samsung', price:'45000'},
    {name:'Itel', price:'18000'},
    {name:'Vivo', price:'30000'},
    {name:'Nokia', price:'40000'}
  ]
  return (
    <div className="App">
     
      {/* {
        Products.map((pd)=> <Product name={pd.name} price={pd.price}></Product>)
      } */}
       <Counter></Counter>
       <FetchData ></FetchData>
      {/* <Product name='Sowrub mojumder' price='2500'></Product>
      <Product name='Nishat tabassum' price='5500'></Product>
      <Product name='Najnin soltana' price='4500'></Product>
      <Product name='Tanjila tazrin' price='6500'></Product> */}
    </div>
  );
}

// function Product(props){
// return (
//   <div className='products'>
//     <h2>Name : {props.name}</h2>
//     <p>Price : {props.price}</p>
//   </div>
// )
// }
function Counter(){
  const [count, setCount]=useState(12);
  const IncreaseCount=()=>setCount(count+1);
  const DecreaseCount=()=>setCount(count-1);
  return (
    <div>
      <h3>Add : {count}</h3>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}
function FetchData(){
  const [user, setUser]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  },[])
  return (
    <div>
       <h1>All User :{user.length}</h1>
      {
        user.map(usr=> <DisplayUser name={usr.name} email={usr.email}></DisplayUser>)
      }
      
    </div>
  )
}

function DisplayUser(props){
  return (
    <div style={{backgroundColor:'brown',color:'whitesmoke',padding:'10px', borderRadius:'10px', margin:'10px'}}>
     
      <h4>Name:{props.name}</h4>
      <p>Email : {props.email}</p>
    </div>
  )
}
export default App;
