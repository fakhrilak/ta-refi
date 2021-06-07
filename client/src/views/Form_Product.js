import React,{useState} from 'react'
import { connect } from 'react-redux'
import { postProduct } from 'redux/actions/product'

const Form_Product = ({postProduct}) => {
    const [category,setCategory]=useState("")
    const [product,setProduct] =useState("")
    const [price,setPrice] = useState("")
    const [weight,setWeight] = useState("")
    const [stoct,setStoct] =useState("")
    const [unit,setUnit] = useState("")
    const [desk,setDesk] = useState("")
    const [active,setActive] =useState("")
    const [image,setImage] =useState("")
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [imagepreview,setImagePreview] = useState(null)
   const onSubmit=(e)=>{
        e.preventDefault()
        // const data = new FormData();
        // console.log(image.name)
        // data.append('image',image)
        // data.append('name','hello')

       postProduct(category,product,
        price,weight,stoct,unit,image,desk,active)
    // postProduct(data)
    // console.log(data.File)
   }
   const imageUpload=(e)=>{
        const file = e.target.files[0]
        setImage(file)
        console.log(image)
        setImagePreview(URL.createObjectURL(file))
   }
    return (
        <div>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="pt-28">
        `   <div>
                <input
                placeholder=""
                type="text"
                />
            </div>
            <div>
                <input
                placeholder=""
                type="text"
                />
            </div>
            <div>
                <input
                placeholder="Category ID"
                type="text"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                />
            </div>
            <div>
                <input
                placeholder="ProductName"
                type="text"
                value={product}
                onChange={(e)=>setProduct(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Weight"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Stock"
                value={stoct}
                onChange={(e)=>setStoct(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Unit"
                value={unit}
                onChange={(e)=>setUnit(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Desc"
                value={desk}
                onChange={(e)=>setDesk(e.target.value)}
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="isActive"
                value={active}
                onChange={(e)=>setActive(e.target.value)}
                />
            </div>
            <div>
                <input
                type="file"
                placeholder="select Gambar"
                onChange={(e)=>imageUpload(e)}
                />
            </div>
            <img src={imagepreview}/>
            <div>
                <button >
                    Submit
                </button>
            </div>

        </div>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product: state.product,
  });
  export default connect(mapStateToProps, {postProduct})(Form_Product);

