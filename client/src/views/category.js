import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { deletCategory } from 'redux/actions/category'
import { addCategory } from 'redux/actions/category'
import { getCategory } from 'redux/actions/category'
function Category({getCategory,category,addCategory,deletCategory}) {

  useEffect(()=>{
    getCategory()
  },[])

  const [categori,setCategori] = useState("")
  const [show,setShow] = useState(false)
  const {categories,loading} = category

  const Data = [
    {
      A:"Category"
    }
  ]
  let header = []
  for(var i = 0;i<=Data.length - 1;i++){
    header.push(
      <>
          <th className="px-6 bg-blueGray-200 text-blueGray-500 align-middle border border-solid border-blueGray-400 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              {Data[i].A}
          </th>
      </>
    )
  }


  const OnSubmit=()=>{
    addCategory(categori)
  }
    return (
        <div className="bg-pink-600 md:p-0   pb-10 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full bg-pink-600">
                <div className="mt-10 p-10 shadow-lg bf">
                    <div class="mb-3 pt-0">
                        <input type="text" 
                        placeholder="Add Category" 
                        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        value={categori}
                        onChange={(e)=>setCategori(e.target.value)}
                        />
                    </div>
                    <div className="m-3 pb-5">
                        <button
                        className="m-3 bg-white pb-10 border-black text-black font-mono font-extrabold p-2 rounded"
                        onClick={()=>OnSubmit()}
                        >Add Category</button>
                        <button
                        className="m-3 bg-white pb-10 border-black text-black font-mono font-extrabold p-2 rounded"
                        onClick={()=>setShow(!show)}
                        >Delet</button>
                    </div>
                    <div className="m-11 bg-pink-600">
                      <div className="pt-5 mb-7 bg-pink-600">
                        <table className="items-center w-full border-collapse bg-white">
                          <thead>
                            <tr>
                                {header}
                            </tr>
                          </thead>
                          <tbody>
                                {!loading ? (categories.map((datas,index)=>(
                                  <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">           
                                        <h3 className="text-lg font-mono">{datas.categoryName}</h3>
                                        {show ? <button className="bg-pink-500 rounded align-baseline"
                                          >
                                            <a className="m-1"
                                            onClick={()=>deletCategory(datas.id)}
                                            >x</a>
                                        </button>: null}
                                    </th>
                                  </tr>
                                ))):(
                                <tr>
                                  <h1>Loading...</h1>
                                </tr>
                                )}
                          </tbody>
                      </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps, {getCategory,addCategory,deletCategory})(Category);
