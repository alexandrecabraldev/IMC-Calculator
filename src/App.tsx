import { ContainerApp } from "./components/ContainerApp";
import { ContainerTotal } from "./components/ContainerTotal";
import { Alert } from "./components/Alert";
import { Result } from "./components/Result";

function App() {
  
  return (

    <ContainerTotal>
      {(1!=1)
        ?
          <Alert>Digite somente números</Alert>
        :
        <Result/>
      }
      <ContainerApp/>
    </ContainerTotal>
  )
}

export default App
