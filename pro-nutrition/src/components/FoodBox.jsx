import React, { useState } from 'react'

const FoodBox = (props) => {
  // console.log(props)
  // let {data,index} = props
  // let {cal,id,img,name} = data

  let {data:{cal,id,img,name},index} = props


  const [input,setInput] = useState(0)
  const [quantity, setQuanitity] = useState(0)

  const quanitityHandler=()=>{
      setQuanitity(input)
  }

return (
  <div className='foodbox-main' key={index}>
      <div className='foodbox-main-left'>
          <img src={img} alt="" />
          <div className='foodbox-main-left-1'>
              <h1>{name}</h1>
              <h2>{cal}</h2>
          </div>
          <div className='foodbox-main-left-2'>
              <input type="number" style={{
                  fontSize: "larger",
                  width: "2vw",
                  height:"3vh"
              }}
              value={input}
              min={0}
              onChange={(e)=>{
                  setInput(e.target.value)
              }}/>

              <button onClick={quanitityHandler} className='add'>+</button>
          </div>
      </div>

      <div className='foodbox-main-right'>
          <h4>{name} X {quantity} = {cal * quantity} Calories</h4>
          <button className='reset-btn' onClick={()=>{
              setQuanitity(0)
              setInput(0)
          }} >Reset</button>
      </div>

  </div>
)
}

export default FoodBox