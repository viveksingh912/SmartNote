import React from "react";

function Alert(props) {
   return (
      <div className="alert alert-primary text-start" role="alert">
         {props.message}
      </div>
   );
}

export default Alert;
