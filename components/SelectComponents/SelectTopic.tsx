import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectTopic = () => {
  return (
    <Select>
        <SelectTrigger className="w-[380px] rounded-2xl px-4 py-6">
            <SelectValue placeholder="Topic: All" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='weak'>Weakest</SelectItem>
            <SelectItem value='strong'>Strongest</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default SelectTopic