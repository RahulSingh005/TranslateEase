import React from 'react'
import { IconLanguage } from '@tabler/icons-react'

const LanguageSelector = ({selected, setSelected, languages}) => {
  return (
    <span className='cursor-pointer rounded-full space-x-1 pl-2 bg-black flex items-center flex-row'>
        <IconLanguage size={22} className='text-gray-400' />
        <select value={selected} onChange={(e)=>setSelected(e.target.value)} className='bg-black flex flex-row rounded-full py-1 text-white'>
            {languages.map((language,index)=><option key={index} value={language}>{language}</option>)}
        </select>
    </span>
  )
}

export default LanguageSelector
