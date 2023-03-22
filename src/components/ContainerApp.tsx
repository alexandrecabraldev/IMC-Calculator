import { Title } from "./Title";
import { ContainerInputLabel } from "./ContainerInputLabel";
import { ContainerInner } from "./ContainerInner";
import { Button } from "./Button";
import { ContainerInputs } from "./ContainerInputs";
import { ArrowRight } from "phosphor-react";
import { useState } from "react";

interface PropsContainerApp{
    onHandleImc:Function;
}

export function ContainerApp(props:PropsContainerApp){

    const [valueInputOne, setValueInputOne]= useState(0);
    const [valueInputTwo, setValueInputTwo]= useState(0);
    const [imc,setImc]= useState(0);
 

   function handleChange1(inputValue:number|string){
        
        let inputValueOne = Number(inputValue);
        setValueInputOne(inputValueOne);

        console.log(`value 1: ${valueInputOne}`);
   }

   function handleChange2(inputValue:number|string){
        let inputValueTwo = Number(inputValue);
        setValueInputTwo(inputValueTwo);

        console.log(`value 2: ${valueInputTwo}`);
    }

    function imcCalculator(){
        setImc(valueInputOne/Math.pow(valueInputTwo,2));
        props.onHandleImc(imc)
        console.log(imc);
    }

    return(


            <ContainerInner>

                <Title>Cálculo de IMC</Title>

                <ContainerInputs>
                    <ContainerInputLabel 
                        title="Peso (kg)"
                        labelText="weightInput" 
                        onHandleInputContainerApp={handleChange1}
                        
                    />

                    <ContainerInputLabel 
                        title="Altura (m)" 
                        labelText="heightInput"
                        onHandleInputContainerApp={handleChange2}
                    />
                </ContainerInputs>
                
                <Button type="submit" onClick={imcCalculator}>
                    <>
                        Calcular IMC
                        <ArrowRight size={16} />
                    </>
                </Button>

            </ContainerInner>
   
        
    );
}