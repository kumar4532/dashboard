import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronsDown, ChevronsUp } from 'lucide-react'

interface Group {
    group_name: string,
    points_per_user: number,
    accuracy_percentage: number,
    previous_accuracy_percentage: number
}

const GroupLeaderBoard = ({title, groups}: {title: string, groups: Group[]}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col space-y-4'>
            {
                groups
                .sort((a, b) => b.accuracy_percentage - a.accuracy_percentage)
                .map((group, index) => (
                    <div key={group.group_name} className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-lg'>{group.group_name}</span>
                            <div className='text-gray-400 text-sm'>
                                <span>{group.points_per_user} Points - </span>
                                <span>{group.accuracy_percentage}% correct</span>
                            </div>
                        </div>
                        <div className='flex flex-row my-auto space-x-1'>
                            <span>{index + 1}</span>
                            {
                                (group.accuracy_percentage - group.previous_accuracy_percentage > 0) 
                                    ? <span className='text-green-500'><ChevronsUp /></span> 
                                    : <span className='text-red-500'><ChevronsDown /></span>
                            }
                        </div>
                    </div>
                ))
            }
        </CardContent>
    </Card>
  )
}

export default GroupLeaderBoard