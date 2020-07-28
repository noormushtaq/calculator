
import React from 'react';



import Button from './Button';

import './App.css';



function App() {

  

  let[firstNum,setFirstNum]=React.useState('');

  let[secondNum,setsecondNum]=React.useState('');

  let [operator,setOperater]=React.useState('');

  let[result,setResult]=React.useState(null);

 

 

   function placeNumber(num){
    if(operator===''){
        setFirstNum(firstNum+num);}

    else{
        setsecondNum(secondNum+num);
        
      }
      
    }

    function calculate(){
        switch(operator){
          case '+':
            setFirstNum((Number(firstNum)+Number(secondNum)));
            
            setsecondNum('');
            setOperater('');
            break;
          case '*':
              setFirstNum((Number(firstNum)*Number(secondNum)));
              
              setsecondNum('');
              setOperater('');
              break;
          case '-':
              setFirstNum((Number(firstNum)-Number(secondNum)));
              
              setsecondNum('');
              setOperater('');
              break;
              
                  
               }}
       
   
      function reset() {
        setFirstNum('');
        setsecondNum('');
        setOperater('');

        setResult('');
    
      }
   
  return (
      <div>
      <div className="calculator">

        <div className="display">
          {firstNum==='' ? 0 : firstNum}
          {operator}
          {secondNum}
          {result}
          
        </div>

       

        <div className="button-container-first">

          <Button 

            label="clear" 

            bgColor="white"

            textColor="gray"

            onClick={reset}/>
            
             
          

          <Button 

            label="*" 

            bgColor="red" 

            textColor="white" 

            onClick={()=>{setOperater('*') ; calculate(setOperater('*'))} }>*</Button>

          </div>

          <div className="button-container-second">

          <Button 

            label="7" 

            bgColor="white" 

            textColor="black"

            onClick={() => placeNumber(7)}>7</Button>


          

          <Button 

            label="8" 

            bgColor="white" 

            textColor="black"

            onClick={() =>placeNumber(8)}>8</Button>
            

          <Button 

            label="9" 

            bgColor="white" 

            textColor="black"

             onClick={() => placeNumber(9)}>9</Button>

      

            <Button 

             label="-" 

             bgColor="red" 

             textColor="white"

             onClick={() => {setOperater('-') ;calculate(setOperater('-'))}}>-</Button>
           
         </div>

            <div className="button-container-third">

            
          <Button 

            label="4" 

            bgColor="white" 

            textColor="black"

            onClick={() => placeNumber(4)}>4</Button>

           
           <Button 

             label="5" 

             bgColor="white" 

             textColor="black"

             onClick={() => placeNumber(5)}>5</Button>

             

            <Button 

             label="6" 

             bgColor="white" 

             textColor="black"

             onClick={() => placeNumber(6)}>6</Button>

             
            
            <Button 

            label="+" 

            bgColor="red" 

           textColor="white"

           onClick={() => {setOperater('+') ; calculate(setOperater('+'))} }>+</Button>
           
           </div>

           <div className="button-container-forth">

           <Button 

           label="1" 

           bgColor="white" 

           textColor="black"

           onClick={() => placeNumber(1)}>1</Button>

           
           <Button 

           label="2" 

           bgColor="white" 

           textColor="black"

           onClick={() => placeNumber(2)}>2</Button>


           <Button 

            label="3" 

            bgColor="white" 

            textColor="black"

            onClick={() => placeNumber(3)}>3</Button>

            
            <Button 

            label="=" 

            bgColor="red" 

            textColor="white"

            onClick={calculate}>=</Button>

          

            </div>

            </div>


          </div>

    );
 
  
  }


export default App;