import Card from 'components/Card'
import React from 'react'


const Product = () => {
    const data = [
        {
            name : "makanan",
        },
        {
            name : "minuman"
        }
    ]
    let A=[]
    for(let i=0; i<=3;i++){
        A.push(<Card/>)
    }

    return (
        <div className="pt-8 bg-pink-500">
            <div className=" grid grid-rows-3 grid-flow-col p-8 bg-pink-500">
                    {A}
            </div>
        </div>
    )
}

export default Product

