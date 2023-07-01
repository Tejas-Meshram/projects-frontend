import React, {useState} from 'react'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {

  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <div className='question'>
        <h4>{title}</h4>
        <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/>}</button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion