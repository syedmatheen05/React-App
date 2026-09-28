function List(props){
    const items = props.items
    const fruitItems = items.map(item => <li key={item.id}>{item.name} &nbsp;<b>{item.calories}</b></li>)
    return(<> <h4>{props.catagory}</h4><ol>{fruitItems}</ol></>
   );
}
export default List