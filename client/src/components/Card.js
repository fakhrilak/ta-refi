import React from 'react'
import A from "../assets/img/team-1-800x800.jpg"
const Card = () => {
    return (
        <div className="p-5 w-100 md:w-50 lg:w-48">
            <div className="">
                    <div className="min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg pt-7">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Nama Barang
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            300.000
                            </span>
                        </div>
                        <div className="relative w-auto flex-initial">
                            <div className="pt-3 text-center">
                                <img src={A} className="w-50 md:w-500 lg:w-150 sm:20"/>
                            </div>                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Card
