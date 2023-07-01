import React, { useState } from 'react'

const Tour = ({id, name, info, price, image, removeTours}) => {

    const [readMore, setReadMore] = useState(false);

  return (
    <article>
        <div className="img">
            <img src={image} alt={name} />
        </div>
        <div className="title">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
        <div className="info">
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button className='btn' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'show more'}
                </button>
            </p>
        </div>
        <footer>
            <button className='btn-delete' onClick={()=>removeTours(id)}>Not intrested</button>
        </footer>
    </article>
  )
}

export default Tour