import logo from './assets/logo.svg'
import cart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'

const Navbar = () => {
    return (  
        <div className="w-11/12 ml-auto mr-auto">
          <div className="flex justify-between items-center pb-2">
              <div className="flex items-center gap-5">
                  <img className="pr-5" src={logo} alt="Logo"/>
                  <a>Collections</a>
                  <a>Men</a>
                  <a>Women</a>
                  <a>About</a>
                  <a>Contact</a>
               </div>

               <div className="flex items-center gap-10">
                 <img src={cart}/>
                 <img className="w-auto h-10" src={avatar}/>
               </div>
            </div>

            <div className="bg-slate-500 w-full h-[1px]"></div>
        </div>
        
    );
}
 
export default Navbar