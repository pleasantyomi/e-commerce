import  product1 from './assets/image-product-1.jpg'
import  product2 from './assets/image-product-2.jpg'
import  product3 from './assets/image-product-3.jpg'
import  product4 from './assets/image-product-4.jpg'
import  thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import  thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import  thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import  thumbnail4 from './assets/image-product-4-thumbnail.jpg'
import cart from './assets/icon-cart.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const homepage = () => {
    const [CurrentPicture , setCurrentPicture] = useState(null);

    const pictures =[
        product1,
        product2,
        product3,
        product4
    ]

    const thumbnails = [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4,
    ]

    const defaultPicture = product1 ;
    useEffect(() =>{
        setCurrentPicture(defaultPicture);
    }, [])



    const handlePictureClick = (pictureurl) => {
        setCurrentPicture(pictureurl);
    };

    
    const [count , setCount] = useState(0);
    
    const increaseCount = () => {
        setCount(count +1);
    };

    const decreaseCount =() => {
        setCount(count-1);
    };

    
    return ( 
        <div className="w-10/12 ml-auto mr-auto mt-20">
            <div className="flex">
                <div className="flex-shrink-0 flex-nowrap w-5/12">
                    <img className="w-10/12 h-auto rounded-md mb-3" src={CurrentPicture}/>
                    <div className="flex items-center gap-7">
                        {pictures.map((pictureurl , index) => (
                            <img  className="w-auto h-16 rounded-md" 
                            key={index}
                            src={thumbnails[index]}
                            onClick={() => handlePictureClick(pictureurl)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-5/12 flex-shrink-0 flex-nowrap ml-0 mt-10"> 
                    <h1 className="text-left">
                        <span className="block font-bold uppercase text-xs text-orange-500 pb-5">sneaker company</span>
                        <span className="block font-semibold text-[45px] leading-none">Fall limited edition sneakers</span>
                    </h1>

                    <p className="text-left text-sm pt-5 pb-6 text-gray-400">
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

                    <div className="flex gap-5">
                        <div className="flex gap-3 bg-stone-100 h-10 items-center rounded-md px-2 ">
                            <button onClick={decreaseCount} className="text-2xl font-semibold text-orange-500 pr-5 ">-</button>
                            <p className="w-fit bg-transparent font-semibold text-gray-500">{count}</p>
                            <button onClick={increaseCount} className="text-2xl font-semibold text-orange-500 pl-5">+</button>
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