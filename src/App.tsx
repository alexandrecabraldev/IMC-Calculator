import { ContainerApp } from "./components/ContainerApp";
import { ContainerTotal } from "./components/ContainerTotal";
import { Alert } from "./components/Alert";

function App() {
  
  return (

    <ContainerTotal>
      <Alert>Digite somente números</Alert>
      <ContainerApp/>
    </ContainerTotal>
  )
}

export default App
