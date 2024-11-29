import React from 'react'
import SelectPeople from "./SelectComponents/SelectPeople"
import SelectTime from './SelectComponents/SelectTime'
import SelectTopic from './SelectComponents/SelectTopic'

const SelectItems = () => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between w-full'>
      <SelectTime />
      <SelectPeople />
      <SelectTopic />
    </div>
  )
}

export default SelectItems