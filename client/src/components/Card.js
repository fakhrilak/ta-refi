import React from 'react'
import A from "../assets/img/team-1-800x800.jpg"
const Card = (props) => {
    const {productsName,price,stock,unit,img} = props
    console.log(productsName)
    return (
        <figure className="md:flex bg-gray-200 rounded-xl p-8 md:p-0 m-4">
            <div className="">
                    <div className="min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg pt-7">
                    <div className="flex-auto p-1">
                        <div className="flex flex-wrap">
                        <div className="w-auto flex-initial">
                            <div className="pt-3 text-center">
                                <img src={"http://dreamtechnology.id/testnode/images/products/"+ img} 
                                className="w-10 h-13 md:rounded-none mx-auto object-center object-scale-down" />
                            </div>                        
                        </div>
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1 m-3">
                            <h5 className=" uppercase  text-black text-xs  font-semibold">
                                {productsName}
                            </h5>
                            <span className="font-semibold text-xs text-blueGray-700">
                              Rp{price} 
                            </span>
                            <h5 className="font-semibold text-xs text-blueGray-700">
                              Stock {stock} {unit}
                            </h5>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
        </figure>
    )
}

export default Card
