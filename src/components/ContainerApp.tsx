import { Title } from "./Title";
import { ContainerInputLabel } from "./ContainerInputLabel";
import { ContainerInner } from "./ContainerInner";
import { Button } from "./Button";
import { ContainerInputs } from "./ContainerInputs";
import { ArrowRight } from "phosphor-react";
import { FormEvent, useContext } from "react";
import { ContextApp } from "../context/ContextApp";

interface PropsContainerApp{
    onHandleImc:Function;
    //onHandleButtonClick:Function;

}

export function ContainerApp(props:PropsContainerApp){

    let {validation,imcValue,setValidation,setImcValue,inputOne,inputTwo}=useContext(ContextApp);

    let imcSuport=0;
    let validationSuport =false;

    function handleChange1(inputValue:string){
        
        inputOne = Number(inputValue);
            
        console.log(`value 1: ${inputOne}`);

   }

   function handleChange2(inputValue:string){

        inputTwo = Number(inputValue);
    
        console.log(`value 2: ${inputTwo}`);

    }


    function imcCalculator(event:FormEvent<HTMLFormElement>){
        
        event.preventDefault();
        
        if(inputOne===0 || inputTwo===0){
            validationSuport=false;
            //props.onHandleButtonClick(validationSuport);
            setValidation(false); 
            console.log(validationSuport);
            console.log(`validatio ${validation}`)
        }else{             
            
            imcSuport = inputOne/Math.pow(inputTwo,2);
            validationSuport=true;
            
            setValidation(validationSuport);
            setImcValue(imcSuport);
            
            props.onHandleImc(imcSuport);            
            //props.onHandleButtonClick(validationSuport);
            console.log(validationSuport);
            console.log(`validatio ${validation}`)

        }
        
    }

    return(

            <ContainerInner onSubmit={imcCalculator}>

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
                
                <Button type="submit">
                    <>
                        Calcular IMC
                        <ArrowRight size={16} />
                    </>
                </Button>

            </ContainerInner>
           
    );
}