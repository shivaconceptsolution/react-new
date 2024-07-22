function Operation()
{
  
    return(
        
       <div>
      <Add />
      <Sub />
      <Multi />
      <Div />

       </div>

    );
}
function Add()
{
    var a=10;
    var b=20;
    return(
        
       <div>
      
       <p>Result is {a+b}</p>

       </div>

    );
}
function Sub()
{
    var a=10;
    var b=20;
    return(
        
       <div>
      
       <p>Result is {a-b}</p>

       </div>

    );
}
function Multi()
{
    var a=10;
    var b=20;
    return(
        
       <div>
      
       <p>Result is {a*b}</p>

       </div>

    );
}
function Div()
{
    var a=10;
    var b=20;
    return(
        
       <div>
      
       <p>Result is {a/b}</p>

       </div>

    );
}
export default Operation;