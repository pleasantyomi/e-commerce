import { useState } from 'react';
import close from './assets/icon-close.svg'

const Menu = () => {
  const [hamburger, openhmaburger] = useState("false");

  const menutoggle = () => {
    openhmaburger(prevState => !prevState)
  }

  const menustyle = {
    display : hamburger? 'grid' : 'none',
  }


    return ( 
        <div onClick={menutoggle}>
            <div className="lg:hidden grid h-fit gap-[5px]">
              <div className="block w-4 h-[2px] bg-black"></div>
              <div className="block w-4 h-[2px] bg-black"></div>
              <div className="block w-4 h-[2px] bg-black"></div>
            </div>

            <div className="hidden absolute top-0 left-0 h-screen w-6/12 bg-white mt-6 pl-10">
              <img src={close}/>
              <div className="text-left mt-10 gap-4 font-semibold text-gray-800" style={menustyle}>
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>   
              </div>

               
            </div>


           
        </div>
     );
}
 
export default Menu;