import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronsDown, ChevronsUp } from 'lucide-react'

interface User {
    name: string,
    image: string,
    points: number,
    accuracy_percentage: number,
    previous_accuracy_percentage: number
}

const UserLeaderBoard = ({title, users}: {title: string, users: User[]}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col space-y-4'>
            {
                users
                .sort((a, b) => b.accuracy_percentage - a.accuracy_percentage)
                .map((user, index) => (
                    <div key={user.name} className='flex flex-row justify-between'>
                        <div className='flex flex-row space-x-4'>
                            <Avatar className='m-auto'>
                                <AvatarImage src={user.image} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <span className='text-lg'>{user.name}</span>
                                <div className='text-gray-400 text-sm'>
                                    <span>{user.points} Points - </span>
                                    <span>{user.accuracy_percentage}% correct</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row my-auto space-x-1'>
                            <span>{index + 1}</span>
                            {
                                (user.accuracy_percentage - user.previous_accuracy_percentage > 0) 
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

export default UserLeaderBoard