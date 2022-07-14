// Code EyesOnMe Component Here
import userEvent from '@testing-library/user-event';
function EyesOnMe(){
    return(<button onBlur={(e) => {
        console.log('Hey! Eyes on me!')
     }} 
      onFocus={()=>{
        console.log('Good!')
      }} >Eyes on me</button>)
}
function focusArrow(){
    ;

    }
    function blurArrow(){
        console.log('Hey! Eyes on me!')
    
        }
export default EyesOnMe