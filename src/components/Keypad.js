// Code Keypad Component Here
import userEvent from '@testing-library/user-event';
function Keypad(){
    return (
        <input type="password" onChange={() => console.log("Entering password...")}/>
    )
}



export default Keypad