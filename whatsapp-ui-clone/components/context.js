import React,{useState,useContext,createContext} from 'react';

export function useTab() {
  const [tab,setTab] = useContext(tabContext);
  return [tab,setTab];
}

const tabContext = createContext();

function Tab({children}) {
  const [tab,setTab] = useState(1);
  
  return (
    <tabContext.Provider value={[tab,setTab]}>
      {children}
    </tabContext.Provider>
  );
}

export default function Context({children}){
  return (
    <Tab>
      {children}
    </Tab>
  );
}