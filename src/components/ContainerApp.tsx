import { Title } from "./Title";
import { ContainerInputLabel } from "./ContainerInputLabel";
import { ContainerInner } from "./ContainerInner";
import { Button } from "./Button";
import { ContainerInputs } from "./ContainerInputs";
import { ArrowRight } from "phosphor-react";


export function ContainerApp(){
    return(

            
            <ContainerInner>

                <Title>Cálculo de IMC</Title>

                <ContainerInputs>
                    <ContainerInputLabel title="Peso (kg)"/>
                    <ContainerInputLabel title="Altura (m)"/>
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