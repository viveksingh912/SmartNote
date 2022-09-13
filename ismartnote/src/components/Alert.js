import React from "react";
import AlertContext from "../context/note/alert/alertContext";
import { useContext } from "react";
function Alert() {
   const context = useContext(AlertContext);
   const { alert } = context;

   return (
      <div style={{ height: '50px' }}>
         {alert && <div className="alert alert-primary text-start" role="alert">
            Alert: {alert}
         </div>}
      </div>
   );
}

export default Alert;
