import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators  } from '../redux/index';

function Home() {
  const dispatch=useDispatch();
  const actions=bindActionCreators(actionCreators,dispatch);
  return (
    <>
    <div className="container d-flex mt-4">
    {/* <button className=" btn  btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
    <h2>Add 50Rs to cart</h2>
    <button className=" btn btn-primary"  onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}
    <button className=" btn  btn-primary" onClick={()=>actions.withdrawMoney(100)}>-</button>
    <h2>Add 50Rs to cart</h2>
    <button className=" btn btn-primary"  onClick={()=>actions.depositMoney(100)}>+</button>
    </div>
   </>
  )
}

export default Home