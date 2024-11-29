import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import data from "../data/task-data.json"

const ChartDashBoard = () => {
    const activities = data.activity.monthly;

  return (
    <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 -mt-2 pb-2">
            <CardTitle className="text-base font-normal">Activity</CardTitle>
            <Select defaultValue="month">
                <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                </SelectContent>
            </Select>
        </CardHeader>
        <hr className="border-b border-gray-300 mb-6 w-[95%] mx-auto" />
        <CardContent>
            <ResponsiveContainer width="100%" height={200}>
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
                    <XAxis dataKey="month" scale="point" axisLine={false} tickLine={false} padding={{ left: 20, right: 10, }} tickMargin={10} />
                    <YAxis domain={[0, 'dataMax']} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="value" shape fill="#4052d6" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}

export default ChartDashBoard