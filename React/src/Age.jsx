export function Age({ age }) {
  return ( 
  <div> 
    {age > 18 && <p> your age is {age} </p>}
    {age < 18 && <p> You are very young </p>}
  </div>
 )
  
} 
