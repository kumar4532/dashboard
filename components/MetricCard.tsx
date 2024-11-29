import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const MetricCard = ({title, value, total, isPercentage} : { title:string, value: number | string, total: number | null, isPercentage: boolean}) => {

  const sparklineData = [10, 8, 12, 9, 11, 13, 15]

  return (
    <Card className="overflow-hidden h-[20vh]">
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h2 className="text-2xl mt-4 font-bold tracking-tight">{isPercentage ? `${value} %` : value}</h2>
            {total && (
              <span className="text-sm text-muted-foreground">/{total}</span>
            )}
          </div>
          {sparklineData && isPercentage && (
            <div className="h-10">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path
                  d={`M ${sparklineData
                    .map((value, i) => `${(i / (sparklineData.length - 1)) * 100},${20 - value}`)
                    .join(" L ")}`}
                  fill="none"
                  stroke="currentColor"
                  className="stroke-primary"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default MetricCard