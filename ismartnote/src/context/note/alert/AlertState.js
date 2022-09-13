import AlertContext from "./alertContext";
import React, { useState } from "react";

function AlertState(props) {
    const [alert, setalert] = useState(null);
   const setAlert=(message)=>{
      setalert(message);
      setTimeout(() => {
        setalert(null);
      }, 1500);
   }
  return (
    <AlertContext.Provider value={{alert,setAlert}}>{props.children}</AlertContext.Provider>
  )
}

export default AlertState;