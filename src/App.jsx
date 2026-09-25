import Student from "./student";
function App(){
  return(
    <>
      <Student name="Syed Matheen" age={30} isStudent={false}></Student>
      <Student name="Abdul Haleem" age={40} isStudent={true}></Student>
      <Student />
    </>
    
  );
}
export default App
