import React from "react";
export type formDataType = {
  name: string;
  phone: string;
  email: string;
  textarea: string;
};
type HookReturnType = [
  setValue:React.Dispatch<React.SetStateAction<formDataType>>, 
  onChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onSubmit:(event: React.FormEvent<HTMLFormElement>) => Promise<void>
];
let Data:formDataType;
export default function useForm(callback: any,initialState:formDataType):HookReturnType {
  const [values, setValue] = React.useState(initialState);
  Data = values; //-> Avoid compile time error -> (Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.)
  
  //When change input field  //Set type of e: ... -> form event
  /*React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
    (B..e)-> use <textarea>element*/
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };
  //When user submit form Data
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };
  //Return all of data and function
  return [setValue,onChange,onSubmit];

}
export {Data};
//More -> https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
// set type -> https://www.typescriptlang.org/docs/handbook/2/objects.html

//-------------------------------------------//
//            -:Generic type:-
//------------------------------------------//
// function Generic<T>(parameter:T):T{
//   return parameter;
// } //more :- https://www.javatpoint.com/typescript-generics