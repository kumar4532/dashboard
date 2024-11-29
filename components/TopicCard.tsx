import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Topic {
  name: string,
  image: string,
  correct_percentage: number
}

const TopicCard = ({ title, topics }: {title: string, topics: Topic[]}) => {  
  return (
    <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className='space-y-8 w-full'>
          {
            topics.map((topic) => (
              <div key={topic.name} className='flex flex-row space-x-4 w-full'>
                <div>
                  <img 
                    src={topic.image} 
                    alt={topic.name}
                    width={60} 
                  />
                </div>
                <div className='w-[65%] space-y-2'>
                  <span>{topic.name}</span>
                  <Progress className='h-2' value={topic.correct_percentage}/>
                </div>
                <div className='mt-auto'>
                  <span>{topic.correct_percentage}% <span className='text-gray-400'>correct</span></span>
                </div>
              </div>
            ))
          }
        </CardContent>
    </Card>
  )
}

export default TopicCard