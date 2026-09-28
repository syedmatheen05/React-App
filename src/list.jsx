function List(){
    const fruits = [{id:1,name:"Apple",calories: 95},
                    {id:2,name:"Banana",calories: 77},
                    {id:3,name:"Coconut",calories: 112},
                    {id:4,name:"Orange",calories: 86}];
    fruits.sort((a,b)=> a.calories-b.calories);
    const fruitItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} &nbsp;<b>{fruit.calories}</b></li>)
    return(<ol>{fruitItems}</ol>);
}
export default List