import React, { useState } from 'react'
import GenericModal from './GenericModal';

export default function DropMenu({headOfMenu , screen}) {
    const [dialog, setDialog] = useState(false);


  return (
    <>
    <div className={`${screen ==="lg"? "hidden lg:block":"block lg:hidden absolute bg-slate-700 rounded border-2 border-slate-700 rounded-t-none w-1/2 m-auto z-[1] right-0 left-0"}  `}>
    <div className={`dropdown ${screen ==="lg"? "dropdown-bottom dropdown-end":"w-full"  }`}>
      <div tabIndex={0} role="button" className=" w-full m-auto text-center">
        {headOfMenu}
      </div>
      <ul
        tabIndex={0}
        className={`${screen === "lg"? "":"w-full"} dropdown-content z-[1] menu p-2 mt-1 shadow bg-base-content rounded-box`}
      >
        <li className={`${screen === "lg"? "":"w-full"} cursor-pointer hover:text-red-500  text-center transition-all`} onClick={()=>setDialog(!dialog)}>
          Exist Group
        </li>
      </ul>
    </div>
  </div>
  <GenericModal dialog={dialog} setDialog={setDialog} content={"Are You Sure for Exit from Group?"} header={"Confirm"} url={"chat/exitGroup"} />
  </>   
  )
}
