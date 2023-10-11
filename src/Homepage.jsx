/* eslint-disable react-hooks/rules-of-hooks */
import  product1 from './assets/image-product-1.jpg'
import  product2 from './assets/image-product-2.jpg'
import  product3 from './assets/image-product-3.jpg'
import  product4 from './assets/image-product-4.jpg'
import  thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import  thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import  thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import  thumbnail4 from './assets/image-product-4-thumbnail.jpg'
import cart from './assets/icon-cart.svg'
import previous from './assets/icon-previous.svg'
import next from './assets/icon-next.svg'
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

    const [image, setImage] = useState(0);
    
    const handlePrevious = () => {
        setImage(image - 1);
    }

    const handleNext = () => {
        setImage(image + 1);
    }

    const displayImage = () =>{
        if (image === 0){
            return product1;
        }
    
        else if (image === 1){
            return product2; 
        }

        else if (image === 2) {
            return product3;
        }

        else if (image === 3) {
            return product4;
        }

        // else {
        //     return product1
        // }
    
    }


    return ( 
        <div className="relative lg:w-10/12 w-full lg:ml-auto ml-0 lg:mr-auto lg:mt-20 mt-3">
            <div className="lg:flex">
                <div className="lg:flex-shrink-0 lg:flex-nowrap lg:w-5/12">
                    <div className="relative">
                       <img className="lg:block hidden lg:w-10/12 w-full h-auto  lg:rounded-md mb-3" src={CurrentPicture}/>
                    </div>

                    <div className="relative lg:hidden block">
                        <div className="">
                            <div className="z-0 absolute top-[50%] -translate-y-1/2 left-[1rem]">
                               <button onClick={handlePrevious} disabled={image === 0} className="relative bg-red-100 w-10 h-10 rounded-full">
                                 <img  className="absolute ml-auto mr-auto top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 " src={previous}/>
                               </button>
                            </div>

                            <div className="absolute top-[50%] -translate-y-1/2 right-[1rem]">
                               <button onClick={handleNext} disabled={image === 3} className="relative w-10 h-10 rounded-full bg-red-100 end">
                                 <img  className="absolute  ml-auto mr-auto top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2" src={next}/>
                               </button>
                            </div>
                        </div>

                        <div className="overflow-x-hidden">
                            <img className="h-auto w-full" src={displayImage()}/>
                        </div>


                    </div>

                    
                    <div className="hidden lg:flex items-center gap-7">
                        {pictures.map((pictureurl , index) => (
                            <img  className="w-[78px] h-auto rounded-md" 
                            key={index}
                            src={thumbnails[index]}
                            onClick={() => handlePictureClick(pictureurl)}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:w-5/12 w-11/12 flex-shrink-0 flex-nowrap lg:mt-10 mt-1 ml-auto mr-auto lg:ml-0 lg:mr-0"> 
                    <h1 className="text-left">
                        <span className="block font-bold uppercase text-xs text-orange-500 lg:pb-5 pb-2">sneaker company</span>
                        <span className="block font-semibold lg:text-[45px] text-[35px] leading-none">Fall limited edition sneakers</span>
                    </h1>

                    <p className="text-left text-sm pt-5 pb-6 text-gray-400">
                       These low-profile sneakers are your perfect casual wear companion. Featuring a 
                       durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className="lg:grid flex justify-between">
                       <p>
                          <div className="flex items-center gap-3">
                              <span className="font-bold text-xl">$125.00</span>
                              <span className="font-semibold text-xs bg-orange-100 rounded-md text-orange-600 px-1 py-[1px] h-fit">50%</span>
                          </div>
                       </p>

                       <p className="text-left font-semibold text-sm text-gray-400 mb-5">$250.00</p>

                    </div>


                  
                    <div className="lg:flex grid gap-5">
                        <div className="flex justify-evenly gap-3 bg-stone-100 h-10 items-center rounded-md lg:px-2 ">
                            <button onClick={decreaseCount} className="text-2xl font-semibold text-orange-500 pr-5 ">-</button>
                            <p className="w-fit bg-transparent font-semibold text-gray-500">{count}</p>
                            <button onClick={increaseCount} className="text-2xl font-semibold text-orange-500 pl-5">+</button>
                        </div>

                        <div className="flex justify-center items-center bg-orange-500 lg:px-10 h-10 gap-2 lg:w-fit w-full rounded-md mb-10">
                            <img className="w-3 h-3 text-white" src={cart}/>
                            <button className="font-semibold text-white">Add to cart</button>
                        </div>
                    </div>
                    
                

                </div>
            </div>
        </div>
     );
}
 
export default homepage;