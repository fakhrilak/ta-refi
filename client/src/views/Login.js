import React,{useEffect, useState} from 'react';
import {handleLogin} from "../redux/actions/auth"
import {connect} from "react-redux"
const Login=({handleLogin,auth})=>{
  const {token,message} = auth
  const [email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const onLogin=()=>{
    handleLogin(email,Pass)
  }
  return (
    <div className="pt-10">
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900" 
            style={{
              backgroundImage:
                'url(' + require('assets/img/register_bg_2.png').default + ')',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="pt-20"/>
          <div className="pt-20"/>
          <div className="pt-20"/>
          <div className="pt-20"/>
          <div className="container mx-auto px-4 py-10 h-full pt-5">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h3 className="text-gray-600 text-lg font-bold">Login</h3>
                    </div>

                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-2 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold"></div>
                    <p>{message}</p>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          value={Pass}
                          onChange={(e)=>setPass(e.target.value)}
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: 'all .15s ease' }}
                          onClick={()=>onLogin()}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {handleLogin})(Login);