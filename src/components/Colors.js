import {FaTrash} from 'react-icons/fa'
import {useColors} from '../ColorProvider';
import StarList from './StarList'

const Color =({id,title,color,rating})=>{
const {rateColor,removeColor}=useColors();
return (
    <section>
    <h1> {title}</h1>
    <button onClick={() => removeColor(id)}>
      <FaTrash />
    </button>
    <div style={{ height: 50, background: color }}></div>
    <div>
      <StarList
        starsSelected={rating}
        id={id}
        onRate={rateColor}
      />
    </div>
  </section>
)
}

export default Color;