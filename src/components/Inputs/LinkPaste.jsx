import React from 'react'
import {IconLink} from '@tabler/icons-react'
const LinkPaste = ({handleLinkPaste}) => {
  return (
    <label htmlFor='link-input' className='cursor-pointer '>
        <IconLink size={22} color="grey"/>
        <input type="text" id='link-input' onChange={handleLinkPaste} className="hidden" />
    </label>
  )
}

export default LinkPaste
