import React from 'react'
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"

import data from "../../data/task-data.json"  
  
const SelectPeople = () => {
    return (
        <Select>
            <SelectTrigger className="w-[380px] rounded-2xl px-4 py-6">
                <SelectValue placeholder="People: All" />
            </SelectTrigger>
            <SelectContent>
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="GROUPS">
                            {
                                data.groups_leaderboard.map((group) => (
                                    <CommandItem key={group.group_name}>{group.group_name}</CommandItem>
                                ))
                            }
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="USERS">
                            {
                                data.user_leaderboard.map((user) => (
                                    <CommandItem key={user.name}>{user.name}</CommandItem>
                                ))
                            }
                        </CommandGroup>
                    </CommandList>
                </Command>
            </SelectContent>
        </Select>
    )
}

export default SelectPeople