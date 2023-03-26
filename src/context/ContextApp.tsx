import React, { createContext } from "react";


interface ContextApplication{
  validation:boolean;
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
  imcValue:number;
  setImcValue: React.Dispatch<React.SetStateAction<number>>;
  inputOne:number;
  inputTwo:number;

}

export const ContextApp=createContext<ContextApplication>({
  validation:false,
  setValidation:()=>{},
  imcValue: 0,
  setImcValue:()=>{},
  inputOne:0,
  inputTwo:0,


});