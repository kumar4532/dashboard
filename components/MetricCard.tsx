import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const MetricCard = ({title, value, total, isPercentage} : { title:string, value: number | string, total: number | null, isPercentage: boolean}) => {

  const sparklineData = [
    {
      uv: 20,
    },
    {
      uv: 15,
    },
    {
      uv: 35,
    },
    {
      uv: 10,
    },
    {
      uv: 20,
    },
    {
      uv: 15,
    },
    {
      uv: 35,
    },
    {
      uv: 30,
    },
    {
      uv: 45,
    },
    {
      uv: 55,
    },
    {
      uv: 50,
    },
    {
      uv: 55,
    },
  ]

  return (
    <Card className="overflow-hidden h-[10vh] md:h-[20vh]">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight">{isPercentage ? `${value} %` : value}</h2>
            {total && (
              <span className="text-xs sm:text-sm text-muted-foreground">/{total}</span>
            )}
          </div>
          {sparklineData && isPercentage && (
            <div className="h-12 md:h-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Area type="monotone" dataKey="uv" stroke="#0000ff" fill="#B3B3FF" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default MetricCard