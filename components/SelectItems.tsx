import React from 'react'
import SelectPeople from "./SelectComponents/SelectPeople"
import SelectTime from './SelectComponents/SelectTime'
import SelectTopic from './SelectComponents/SelectTopic'

const SelectItems = () => {
  return (
    <div className='flex flex-row justify-between'>
        <SelectTime />
        <SelectPeople />
        <SelectTopic />
    </div>
  )
}

export default SelectItems