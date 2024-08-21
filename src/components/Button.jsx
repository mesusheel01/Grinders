import React from 'react'

const Button = ({text,func}) => {
  return (
    <div>
      <button onClick={func} className='flex mx-auto px-8 py-4 rounded-xl border-blue-400 border-solid border-[2px] bg-slate-950 blueShadow duration-200'>
        <p>{text}</p>
      </button>

    </div>
  )
}

export default Button
