import React from 'react'
import './Tags.scss'


const Tags = ({ tags }) => {  
  return (
    <div className="tags">
      {
        tags
        ? tags.map((_tag, idx) => {
          return (
            <Tag key={idx} idx={idx} name={_tag}/>
          )
        })
        : null
      }      
    </div>
  )
}

const Tag = ({ idx, name }) => {
  const tagColors = [
    "#B07156", "#AB4E68", "#533745", "#9D9171", "#725Ac1",
    "#6DA34D", "#56445D", "#548687", "#FE5F55", "#E59500",
    "#806D40", "#382633", "#D8829D", "#6E0D25", "#8783D1",
    "#2D3142", "#5E503F", "#535657", "#111D4A", "#D33F49", 
    "#262730", "#292F36", "#2C5530", "#99621E", "#AF90A9", 
    "#565254", "#58A4B0", "#373F51", "#856084", "#E76D83"
  ]

  return (
    <div className="tag" style={{backgroundColor: `${tagColors[idx % tagColors.length]}`}}>
      {name}
    </div>
  )
}

export default Tags