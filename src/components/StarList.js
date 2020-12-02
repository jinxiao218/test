import Star from './Star'


const StarList = ({starsSelected = 0,id,
    totalStars = 5,
    onRate = (f) => f,
  })=>{return <div>
       
        {[...Array(totalStars)].map((n,i) =>(<Star id={i} key={i} selected={i<starsSelected} onClick={()=>onRate(id,i+1)}></Star>
         ))}
        
    <p>{starsSelected} of {totalStars}</p>
    </div>}
  
export default StarList;