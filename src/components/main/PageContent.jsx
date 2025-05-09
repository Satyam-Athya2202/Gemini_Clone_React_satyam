import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaCompass } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import SearchBar from "../SearchBar";
import Answer from "../Answer";
import { Context } from "../../context/Context";



const PageContent = () => {

 const {loading}=useContext(Context)

  const cards = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip.",
      icon: FaCompass,
      hoverColor: "text-blue-700",
      id: 1,
    },
    {
      text: "Briefly summarize this concept urban planning.",
      icon: FaLightbulb,
      hoverColor: "text-yellow-400",
      id: 2,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat.",
      icon: MdOutlineChatBubbleOutline,
      hoverColor: "text-green-500",
      id: 3,
    },
    {
      text: "Improve the readability of the following code",
      icon: FaCode,
      hoverColor: "text-red-300",
      id: 4,
    },
  ];

  const [iconHover, setIConHover] = useState(null);

  // function onIconHover() {
  //   setIConHover(!iconHover);
  // }

  return (
  <>
    <div
      className="mainContent 
     min-h-screen w-[calc(100vw-350px)] pl-3.5 absolute top-0 right-0 flex justify-center flex-col
   "
    >
      <Navbar />

      <div
        className="heading w-full flex  justify-center px-5 
    flex-col gap-4 mt-20"
      >
        <span className="text-5xl font-medium bg-gradient-to-r from-[#6189ca] to-[#c0655d] bg-clip-text text-transparent">
          Hello, Dev.
        </span>

        <span className="text-5xl font-medium text-gray-400">
          How can i help you today?
        </span>
      </div>

      <div
        className="mainPageCardsContianer w-full px-4 flex  
   items-center gap-5 mb-3.5 h-[400px] "
      >
        {cards.map((card,index) => {
          const CardIcon = card.icon;
          return (
            <div
              className="mainPageCards w-[200px] h-[230px] rounded-lg p-2.5 flex justify-between items-center flex-col 
              bg-gray-900 hover:bg-gray-700 ease-in-out duration-200"
              key={card.id}
              onMouseEnter={()=>setIConHover(index)}
              onMouseLeave={()=>setIConHover(null)}
            >
              <p>{card.text}</p>
              <CardIcon
                className={`self-baseline-last ${
                  iconHover === index ? card.hoverColor +" scale-[1.6] ease-in-out duration-200 ": ""
                }`}
              />
            </div>
          );
        })}
      </div>

      <SearchBar />



    </div>
    
   {loading?(
    
     
    <div className="answerpage  flex justify-center items-center  w-12/12 min-h-[250px] bg-gray-800 ">
       

        <Answer/>
         </div>):(null)} 
 

      </>
  );
};

export default PageContent;

{
  /*   <div className="mainPageCards w-[200px] h-[230px] rounded-lg p-2.5 flex justify-between items-center flex-col  hover:bg-gray-700 ease-in-out duration-200
    bg-gray-900"
    onMouseEnter={onIconHover}
    onMouseLeave={onIconHover}
    
    >
      <p>Suggest beautiful places to see on an upcoming road trip.</p>
      <FaCompass  className={`self-baseline-last ${iconHover?"text-blue-700":"null"} `}/>
    </div>
    
   <div className="mainPageCards w-[200px] h-[230px] rounded-lg p-2.5 flex hover:bg-gray-700 ease-in-out duration-200 justify-between items-center flex-col 
    bg-gray-900" 
    onMouseEnter={onIconHover}
    onMouseLeave={onIconHover}>
      <p>Briefly summarize this concept urban planning.</p>
      <FaLightbulb   className={`self-baseline-last ${iconHover?"text-yellow-400":"null"} `}/>
    </div>
   <div className="mainPageCards w-[200px] h-[230px] rounded-lg hover:bg-gray-700 ease-in-out duration-200 p-2.5 flex justify-between  items-center flex-col 
    bg-gray-900"
    onMouseEnter={onIconHover}
    onMouseLeave={onIconHover} >
      <p>Brainstorm team bonding activities for our work retreat.</p>
      <MdOutlineChatBubbleOutline   className={`self-baseline-last ${iconHover?"text-green-500":"null"} `}/>
    </div>
   <div className="mainPageCards w-[200px] h-[230px] rounded-lg p-2.5 flex hover:bg-gray-700 ease-in-out duration-200 justify-between items-center flex-col 
    bg-gray-900"
    onMouseEnter={onIconHover}
    onMouseLeave={onIconHover} >
      <p>Improve the readability of the following code</p>
      <FaCode  className={`self-baseline-last ${iconHover?"text-red-300":"null"} `} />
    </div> */
}
