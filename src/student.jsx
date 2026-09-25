import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Student: {props.isStudent ? "Yes": "No"}</h1>
        </div>
    );
}
Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student