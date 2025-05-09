import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { IoMdMenu } from "react-icons/io";
import PageContent from './components/main/PageContent';
import ContextProvider from './context/Context';
import Answer from './components/Answer';

function App() {
  
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  return (
    <>
      <ContextProvider>
      <div className="mainPage bg-gray-800 min-h-screen w-full text-white relative flex justify-center items-center ">
      
      
      <IoMdMenu
        className="fixed left-[20px] top-[26px] scale-[1.8] cursor-pointer z-50 hover:rotate-90 duration-300 "
        onClick={handleExpand}
      />
  

    <Sidebar
    
      handleExpand={handleExpand}
      expand={expand}
    />

    <PageContent/>


  </div>
      </ContextProvider>
    </>
  );
}

export default App;
