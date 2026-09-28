import List from './list.jsx'
function App(){
  const fruits = [{id:1,name:"Apple",calories: 95},
                    {id:2,name:"Banana",calories: 77},
                    {id:3,name:"Coconut",calories: 112},
                    {id:4,name:"Orange",calories: 86}];
  const vegetables = [{id:1,name:"Tomato",calories: 45},
                    {id:2,name:"Carrot",calories: 67},
                    {id:3,name:"Potato",calories: 120},
                    {id:4,name:"Bringal",calories: 186} ];
  return(
    <>
    <List items={fruits} catagory="Fruits"/>
    <List items={vegetables} catagory="Vegetables"/>
    </>
  );
}
export default App
