import product1 from './assets/image-product-1.jpg'
import product2 from './assets/image-product-2.jpg'
import product3 from './assets/image-product-3.jpg'
import product4 from './assets/image-product-4.jpg'
import productthumb1 from './assets/image-product-1-thumbnail.jpg'
import productthumb2 from './assets/image-product-2-thumbnail.jpg'
import productthumb3 from './assets/image-product-3-thumbnail.jpg'
import productthumb4 from './assets/image-product-4-thumbnail.jpg'
import cart from './assets/icon-cart.svg'


const homepage = () => {
    
    return ( 
        <div className="w-10/12 ml-auto mr-auto mt-20">
            <div className="flex">
                <div className="flex-shrink-0 flex-nowrap w-5/12">
                    <img className="w-10/12 h-auto rounded-md mb-3" src={product1}/>
                    <div className="flex items-center gap-7">
                        <img className="w-auto h-16 rounded-md" src={productthumb1}/>
                        <img className="w-auto h-16 rounded-md" src={productthumb2}/>
                        <img className="w-auto h-16 rounded-md" src={productthumb3}/>
                        <img className="w-auto h-16 rounded-md" src={productthumb4}/>
                    </div>
                </div>

                <div className="w-5/12 flex-shrink-0 flex-nowrap ml-0"> 
                    <h1 className="text-left">
                        <span className="font-bold uppercase text-xs">sneaker company</span>
                        <span className="block font-semibold text-[45px] leading-none">Fall limited edition sneakers</span>
                    </h1>

                    <p className="text-left text-sm pt-10 pb-6">
                       These low-profile sneakers are your perfect casual wear companion. Featuring a 
                       durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <p>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-xl">$125.00</span>
                            <span className="font-semibold text-xs bg-orange-100 rounded-md text-orange-600 px-1 py-[1px] h-fit">50%</span>
                        </div>
                    </p>

                    <p className="text-left font-semibold text-sm text-gray-400 mb-5">$250.00</p>

                    <div className="flex">
                        <div className="gap-3 bg-orange-100 h-10 items-center">
                            <button className="text-lg">-</button>
                            <input placeholder="0" className="w-10 px-5 bg-transparent  h-10"/>
                            <button>+</button>
                        </div>

                        <div className="flex items-center bg-orange-500 px-10 h-10 gap-2 rounded-md">
                            <img className="w-3 h-3 text-white" src={cart}/>
                            <p className="font-semibold text-white">Add to cart</p>
                        </div>
                    </div>
                    
                

                </div>
            </div>
        </div>
     );
}
 
export default homepage;