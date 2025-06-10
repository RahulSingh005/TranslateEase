import { span } from 'motion/react-client'
import React from 'react'

const IconButton = ({Icon, onClick}) => (
  <span className="cursor-pointer flex items-center space-x-2" onClick={onClick} role="button">
    <Icon size={22} className="text-gray-400" />
  </span>
)

export default IconButton;
