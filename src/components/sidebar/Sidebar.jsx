import React,{useContext} from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoChatbox } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiTimer2Line } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Context} from '../../context/Context';


const Sidebar = ({ handleExpand, expand }) => {

  const { promptHistory, handleHistoryClick } = useContext(Context);
  return (
    <div
      className={`sidebar w-[350px] h-full fixed bg-gray-900 top-0 flex justify-center flex-col pl-4 gap-7 
      transition-all duration-300 z-50  rounded-r-4xl shadow 
      ${expand ? 'left-0  shadow-lg drop-shadow-[0_5px_5px_rgba(59,130,246)]' : 'left-[-350px] '}`}
    >
   
      <RxCross1
        className="absolute right-[20px] top-[26px] scale-[1.8] cursor-pointer hover:scale-[1.2] duration-300 "
        onClick={handleExpand}
      />

      <div className="newChat cursor-pointer w-32 h-16 p-1.5 rounded-4xl bg-gray-800 flex justify-center items-center gap-2.5 mt-4 ">
        <FaPlus className='scale-[1.5]' />
        new chat
      </div>

      <div className="recentDetails w-full h-1/2 flex flex-col relative p-2.5">
        <span className='absolute top-3.5 w-full font-bold text-xl'>Recent</span>


        <div className="recentChats  h-[300px] mt-10 flex flex-col gap-1.5 overflow-y-auto rounded-2xl  ">
  {promptHistory.length > 0 ? (
    promptHistory.map((item, index) => {
            
      if( index===0){
        return null
      }
  
     return(
       <p
        key={index}
        className='flex cursor-pointer items-center gap-2 hover:bg-gray-800 p-2 rounded-3xl text-white '
        onClick={() => handleHistoryClick(index)}
      >
        <IoChatbox className='font-extrabold' />
        {item.prompt.length > 30 ? item.prompt.slice(0, 30) + '...' : item.prompt}
       
      </p>
     )
})
  ) : (
    <p className='text-gray-500 text-sm mt-4'>No prompts yet</p>
  )}
</div>
      </div>

      <div className="help flex cursor-pointer items-center gap-3">
        <IoIosHelpCircleOutline className='scale-[1.8] hover:scale-[2] duration-300' /> Help
      </div>
      <div className="activity flex cursor-pointer items-center gap-3">
        <RiTimer2Line className='scale-[1.8] hover:rotate-360 duration-300' /> Activity
      </div>
      <div className="setting flex cursor-pointer items-center gap-3">
        <IoIosSettings className='scale-[1.8] hover:rotate-180 duration-300' /> Setting
      </div>
    </div>
  );
};

export default Sidebar;
