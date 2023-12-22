import React,{useEffect} from "react";

function UseDocumentTitle(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  });
  return(
    <div>{}</div>
  )
  
}

export default UseDocumentTitle;

