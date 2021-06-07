import Card from 'components/Card'
import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { deletProduct } from 'redux/actions/product'
import { getProduct, } from 'redux/actions/product'


const Product = ({getProduct,product,deletProduct}) => {
    const {products} = product
    useEffect(()=>{
        getProduct()
    },[])

    return (
        <div className="pt-8 bg-pink-500">
            <div className=" grid grid-rows-3 grid-flow-col p-8 bg-pink-500">
                {products != []? (products.map((datas,index)=>(
                    <div key={index}>
                        <button
                        onClick={()=>deletProduct(datas.id)}
                        >x</button>
                        <Card
                        productsName={datas.productName}
                        price={datas.price}
                        stock={datas.stock}
                        unit={datas.unit}
                        img = {datas.image}
                        />
                    </div>
                ))):(<h1>Loading....</h1>)}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    product: state.product,
  });
  export default connect(mapStateToProps, {getProduct,deletProduct})(Product);

