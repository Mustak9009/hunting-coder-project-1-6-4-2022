import React from "react";
export type formDataType ={
    name:string;
    phone:string;
    email:string;
    textarea:string;
}
export const useForm = (callback:any, initialState:formDataType) => {
  const [values, setValue] = React.useState(initialState);
  //When change input field  //Set type of e: ... -> form event 
  /*React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
    (B..e)-> use <textarea>element*/
  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue({ ...values, [event.target.name]: event.target.value });
  };
  //When user submit form Data
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };
  //Return all of data and function
  return {
    onChange,
    onSubmit,
    values,
    setValue
  };
};
//More -> https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
// set type -> https://www.typescriptlang.org/docs/handbook/2/objects.html
