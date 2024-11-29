import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectTime = () => {
    return (
        <Select>
            <SelectTrigger className="w-[380px] rounded-2xl px-4 py-6">
                <SelectValue placeholder="TimeFrame: All Time" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Last 7 Days</SelectItem>
                <SelectItem value="dark">This Month</SelectItem>
                <SelectItem value="system">This Year</SelectItem>
                <SelectItem value="system">Custom</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectTime