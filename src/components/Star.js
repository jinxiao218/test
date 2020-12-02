
import { FaStar } from "react-icons/fa";

 const Star = ({selected=false,onClick=(f)=>f})=>{
        return <FaStar id='star' color={selected?'red':'grey'} onClick={onClick}>         
        </FaStar>;
    
}
export default Star;