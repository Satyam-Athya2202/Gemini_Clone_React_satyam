import React, { useContext, useState } from 'react';
import { FaSearch, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';
import { RiImageAddLine } from "react-icons/ri";
import { Context } from '../context/Context';



const SearchBar = () => {

  const [prompt,setPrompt]=useState("")
  const{onSent}=useContext(Context);

  const handledSend=()=>{
     if(prompt.trim()!==""){
      onSent(prompt)
      setPrompt("")
     }
  }

    return (
 <>
 
 <div className="w-8/12 absolute top-[80%]  mt-10 px-4">
     <form
     onSubmit={(e)=>{e.preventDefault()
    handledSend() 
    }
     }
     
     >
       <div className="search-bar flex items-center gap-3 px-4 py-3 rounded-full shadow-md focus-within:ring-2 focus-within:ring-[#6289C9] transition-all bg-gray-900">

       

        <FaSearch className="text-gray-500 text-lg" />

     
        <input
          type="text"
          placeholder="Enter the prompt here"
          className="flex-1 outline-none text-white text-base placeholder-gray-400 bg-transparent"
value={prompt}
onChange={(e)=>setPrompt(e.target.value)}

        />

       
<RiImageAddLine  className="text-gray-500 text-lg cursor-pointer hover:text-green-500 scale-[1.3]" />
      
        <FaMicrophone className="text-gray-500 text-lg cursor-pointer hover:text-red-500" />

        
        <FaPaperPlane className="text-blue-500 text-lg cursor-pointer hover:scale-110 transition-transform" 
        onClick={handledSend}
        />
      
  
      </div>
     </form>
      <span className='ml-4 mt-10 text-[12px] text-gray-400'>Gemini may display the inaccurate info, including about people, so double-check it's response. Your privicy and Gemini Apps.</span>

    </div>
    
    
 </>

  );
};

export default SearchBar;
