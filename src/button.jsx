function Button(){
    let count = 0;
    const handleClick = (name) => {
        if(count <= 3){
            count++;
            console.log(`${name} you clicked me ${count} time`);
        }
        else{
            console.log(`${name} Stop Clicking me`);
        }
    };
    return (<>
            <button onClick={ () => handleClick("Syed") }>Click Me</button>
        </>);
}
export default Button