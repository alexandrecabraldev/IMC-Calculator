import { ContainerApp } from "./components/ContainerApp";
import { ContainerTotal } from "./components/ContainerTotal";
import { Alert } from "./components/Alert";
import { Result } from "./components/Result";
import { useState } from "react";

function App() {
  const [imcValue,setImcValue] = useState(0);

  function handleImc(valueImc:number){
    setImcValue(valueImc);
  }

  return (

    <ContainerTotal>
      {

        (1==1)
        ?
          <Alert>Digite somente números</Alert>
        :
          <Result imc={imcValue}/>
      }
      
      <ContainerApp onHandleImc={handleImc}/>
    </ContainerTotal>
  )
}

export default App
