import React from 'react'
import { useEffect, useState } from "react";
function Tags(props) {
    const [select, setSelect] = useState(props.selected);
    let selectedStyle = ' bg-neutral text-primary'
    if (select) {
        selectedStyle = ' bg-primary text-black hover:bg-primary'
    }
    const selectAction = () => {
        setSelect(!select)
        console.log(select);   
    }
  return (
    <div>
          <button onClick={selectAction} className={'btn tablet:btn-sm mx-1 hover:bg-neutral' + selectedStyle}>{props.title}</button>
    </div>
  )
}
export default Tags
