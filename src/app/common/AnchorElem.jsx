import React from 'react'

const AnchorElem = ({href,name}) => {
  return (
    <a className="hover:underline text-blue-400 hover:text-blue-600" href={href} target="_blank">
      {name}
    </a>
  )
}

export default AnchorElem
