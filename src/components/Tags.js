import React from 'react'
import './Tags.scss'


const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {
        tags
        ? tags.map((_tag, idx) => {
          return (
            <Tag key={idx} name={_tag}/>
          )
        })
        : null
      }      
    </div>
  )
}

const Tag = ({ name }) => {
  return (
    <div className="tag">
      {name}
    </div>
  )
}

export default Tags