import React from 'react'

const  Message=({own})=> {
  return (
    <div className={own ? "message own" : "message"}>
    <div>Message</div>
    </div>
  )
}


export default Message
