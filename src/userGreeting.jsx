import PropTypes from "prop-types";
function UserGreeting(props){
    if(props.isLoggedIn){
        return(<h1>Welcome {props.username}</h1>);
    }
    return(<h1>Please Log-in to continue</h1>);

}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting