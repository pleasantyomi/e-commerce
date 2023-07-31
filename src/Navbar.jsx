import logo from './assets/logo.svg'
import cart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'
import Menu from './Menu'

const Navbar = () => {
    return (  
        <div className="w-11/12 ml-auto mr-auto mt-6">
          <div className="flex justify-between items-center pb-2">
              <div className="flex items-center gap-5 text-gray-400">
                <div className="flex items-center gap-3">
                  <Menu/>
                  <img className="pr-5" src={logo} alt="Logo"/>
                </div>
                  
                <div className="hidden lg:flex gap-5">
                 <a>Collections</a>
                 <a>Men</a>
                 <a>Women</a>
                 <a>About</a>
                 <a>Contact</a>   
                </div>
                  
               </div>

               <div className="flex items-center gap-10">
                 <img src={cart}/>
                 <img className="w-auto h-10" src={avatar}/>
               </div>
            </div>

            <div className="hidden lg:block bg-stone-300 w-full h-[1px]"></div>
        </div>
        
    );
}
 
export default Navbar