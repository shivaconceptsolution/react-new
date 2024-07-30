import { React,Fragment} from "react"
const data = [{  
        id:1,
        name: 'Ayaan',  
        age: 26  
        },{  
            id:2,
        name: 'Ahana',  
        age: 22  
        },{  
            id:3,
        name: 'Peter',  
        age: 40   
        },{  
        id:4,
        name: 'Virat',  
        age: 30  
        },{ 
            id:5, 
        name: 'Rohit',  
        age: 32  
        },{
        id:6,  
        name: 'Dhoni',  
        age: 37  
        }] 
export default function FramgmentExample()
{
    

        return(
            <div>  
    
            {data.map(item => (  
      
              // Without the 'key', React will give a key warning  
      
              <React.Fragment key={item.id}>  
      
                <h2>{item.name}</h2>  
      
                <p>{item.age}</p>  
      
               
      
              </React.Fragment>  
      
            ))}  
      
          </div>  )
}