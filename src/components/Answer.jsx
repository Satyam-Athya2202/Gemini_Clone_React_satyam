import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../context/Context";
import { RiGeminiLine } from "react-icons/ri";


// Custom hook for typewriter effect
function useFastTypewriter(text, speed = 30) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    setDisplayed(""); 
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const Answer = () => {
  const { response } = useContext(Context);
  const typedText = useFastTypewriter(response, 5); 

  return (
    <div className="min-h-[200px] max-h-[80vh] overflow-clip w-full absolute top-[100%] bg-gray-800 flex justify-center flex-col perspective-[1000px] ">

   
      <RiGeminiLine className="animate-spin w-10 self-center text-blue-500 h-8 border-r border-purple-500 rounded-full border-t-transparent [transform-style:preserve-3d]" />

    
      <pre className="bg-gray-900 p-6 mb-6 min-h-[60px] w-8/12 mt-4.5 rounded-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-red-800 relative left-[350px] ml-3.5 whitespace-pre-wrap break-words text-white font-medium ">
        {typedText}
      </pre>

      
    </div>
  );
};

export default Answer;

