import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface Activity {
    month: string,
    value: number
}

const ChartDashBoard = ({ activities }: {activities: Activity[]}) => {
  return (
    <Card className="w-full h-[100%]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base sm:text-lg font-normal">Activity</CardTitle>
            <Select defaultValue="month">
                <SelectTrigger className="w-[90px] sm:w-[110px]">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                </SelectContent>
            </Select>
        </CardHeader>
        <hr className="border-b border-gray-300 mb-4 w-[95%] mx-auto" />
        <CardContent>
            <ResponsiveContainer className="h-full" width="100%" height={200}>
                <BarChart
                    data={activities}
                    margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                    }}
                    barSize={10}
                >
                    <XAxis dataKey="month" scale="point" axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }} tickMargin={8} tick={{fontSize: 12}} />
                    <YAxis domain={[0, 'dataMax']} axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                    <Tooltip />
                    <Bar dataKey="value" shape fill="#4052d6" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}

export default ChartDashBoard

