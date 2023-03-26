import { ContainerApp } from "./components/ContainerApp";
import { ContainerTotal } from "./components/ContainerTotal";
import { Alert } from "./components/Alert";
import { Result } from "./components/Result";
import { useState } from "react";
import { ContextApp } from "./context/ContextApp";

function App() {

  const [validation,setValidation]=useState(true);
  const [imcValue,setImcValue] = useState(0);
  
  let inputOne=0;
  let inputTwo=0; 

  function handleImc(valueImc:number){
    
    setImcValue(valueImc);
    console.log(`imc é ${valueImc}`);
  }

  function resetApp(){

  }


  return (
    <ContextApp.Provider value={{validation,setValidation,imcValue, setImcValue, inputOne, inputTwo}}>
      <ContainerTotal>
        <>
          <ContainerApp onHandleImc={handleImc} />
          {
            
            (validation)
            ?
              (imcValue && imcValue!==Infinity) 
              && 
                (
                
                    <Result imc={Number(imcValue.toFixed(2))}/>
                    //resetApp()
                
                )
            :
              (<Alert>Digite somente números</Alert>)
          
          }
        </>
        
      </ContainerTotal>
    </ContextApp.Provider>
  )
}

export default App
