import { createContext } from "react";
import { useState,useEffect } from "react";

import main from "../Config/gemini"

export const Context= createContext(); 

const ContextProvider=({children})=>{

const [response,setResponse]=useState("")
const [promptHistory, setPromptHistory] = useState([]);
const [loading,setLoading]=useState()

    const onSent = async (prompt) => {
        
      try {
        setLoading(false)
          const result = await main(prompt);
          setResponse(result.trim())
          setPromptHistory((prev)=>[...prev,{prompt,response:result}])
          console.log(result.trim());
        } catch (err) {
          console.error("Gemini error:", err);
        }finally{
          setLoading(true)
        }
      };
      
      useEffect(() => {
       
        onSent("");
        
      }, []);

const handleHistoryClick = (index) => {
  const item = promptHistory[index];
  setResponse(item.response);
};

const contextValue={
  onSent,
  response, 
  promptHistory,
  handleHistoryClick,
  loading

}
return( 

    <Context.Provider 
    value={contextValue}
    >

        {children}
    </Context.Provider>
)

}

export default ContextProvider