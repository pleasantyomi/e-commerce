import { useState } from 'react';
import close from './assets/icon-close.svg'
import './Menu.css'

const Menu = () => {
  const [open, isOpen] = useState(false);

  return ( 
        <div className="lg:hidden block">
            <button  onClick={()=> isOpen(prev => !prev)} className="grid h-fit gap-[5px]">
              <div className="block w-4 h-[2px] bg-black"></div>
              <div className="block w-4 h-[2px] bg-black"></div>
              <div className="block w-4 h-[2px] bg-black"></div>
            </button>

            <div className={open?  "showMenu" : "hideMenu"}>
              <div>
                <div className="mt-2 ml-4">
                  <img onClick={()=> isOpen(false)} src={close}/>
                  <div className="grid text-left mt-10 gap-4 font-bold text-gray-800">
                    <a>Collections</a>
                    <a>Men</a>
                    <a>Women</a>
                    <a>About</a>
                    <a>Contact</a>   
                  </div>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default Menu;