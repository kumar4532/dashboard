import React, {useState} from 'react'
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
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import data from "../../data/task-data.json"

const SelectPeople = () => {

    const [selectedGroups, setSelectedGroups] = useState<string[]>([])
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    const removeSelection = (value: string) => {
        setSelectedGroups(selectedGroups.filter((group) => group !== value))
        setSelectedUsers(selectedUsers.filter((user) => user !== value))
    }
    
    const clearSelections = () => {
        setSelectedGroups([])
        setSelectedUsers([])
    }    

    return (
        <div className='w-full'>
            <Select>
                <SelectTrigger className="w-[380px] rounded-2xl px-4 py-6">
                    <SelectValue placeholder={selectedGroups.length || selectedUsers.length ? "People: Multiple Selected" : "People: All"} />
                </SelectTrigger>
                <SelectContent>
                    <Command>
                        <div className={`${selectedGroups.length || selectedUsers.length ? "mx-2 w-[380px]": "m-0 p-0"}`}>
                            {selectedGroups.map((group) => (
                                <Badge
                                    key={group}
                                    variant="secondary"
                                    className="rounded-full"
                                >
                                    {group}
                                    <button
                                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            removeSelection(group)
                                        }
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }}
                                    onClick={() => removeSelection(group)}
                                    >
                                    <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                            {selectedUsers.map((user) => (
                                <Badge
                                    key={user}
                                    variant="secondary"
                                    className="rounded-full"
                                >
                                    {user}
                                    <button
                                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            removeSelection(user)
                                        }
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }}
                                    onClick={() => removeSelection(user)}
                                    >
                                    <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="GROUPS">
                                {
                                    data.groups_leaderboard.map((group) => (
                                        <CommandItem 
                                            key={group.group_name} 
                                            onSelect={() => {
                                                if(selectedGroups.includes(group.group_name)){
                                                    setSelectedGroups(selectedGroups.filter((name) => name !== group.group_name))
                                                }else {
                                                    setSelectedGroups([...selectedGroups, group.group_name])
                                                }
                                            }}
                                        ><div className="flex items-center gap-2">
                                            <div className={`h-4 w-4 border rounded-full ${selectedGroups.includes(group.group_name)
                                                    ? "bg-blue-500"
                                                    : "border-input"
                                                }`}
                                            />
                                            </div>
                                            {group.group_name}</CommandItem>
                                    ))
                                }
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="USERS">
                                {
                                    data.user_leaderboard.map((user) => (
                                        <CommandItem 
                                            key={user.name}
                                            onSelect={() => {
                                                if(selectedUsers.includes(user.name)){
                                                    setSelectedUsers(selectedUsers.filter((name) => name !== user.name))
                                                }else {
                                                    setSelectedUsers([...selectedUsers, user.name])
                                                }
                                            }}
                                        ><div className="flex items-center gap-2">
                                            <div className={`h-4 w-4 rounded-full border ${selectedUsers.includes(user.name)
                                                    ? "bg-blue-500"
                                                    : "border-input"
                                                }`}
                                            />
                                            </div>
                                            {user.name}</CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectPeople