'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SelectItems from '@/components/SelectItems'
import MetricDashBoard from '@/components/MetricDashBoard'
import ChartDashBoard from '@/components/ChartDashBoard'
import TopicCard from '@/components/TopicCard'
import data from "../../../data/task-data.json"
import UserLeaderBoard from '@/components/UserLeaderBoard'
import GroupLeaderBoard from '@/components/GroupLeaderBoard'

const Dashboard = () => {

  const activities = data.activity.monthly

  const weakTopics = data.topics.weakest
  const strongTopics = data.topics.strongest

  const users = data.user_leaderboard
  const groups = data.groups_leaderboard

  return (
    <SidebarProvider>
      <div className='flex h-screen w-full'>
        <div className='hidden md:block'>
          <SideBar />
        </div>
        <div className='flex-1 flex flex-col relative'>
          <div className='md:hidden mt-7 px-4 flex items-center'>
            <SidebarTrigger />
          </div>
          <Navbar />
          <main className='w-full h-screen px-4 pb-2 md:px-8 overflow-auto mt-6 md:mt-24'>
            <hr className="border-b border-gray-300 md:mb-8 mb-4" />
            <SelectItems />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 w-full mt-4'>
              <div className="grid grid-cols-3 gap-2"><MetricDashBoard /></div>
              <div><ChartDashBoard activities={activities} /></div>
              <div><TopicCard title={"Weakest Topics"} topics={weakTopics} /></div>
              <div><TopicCard title={"Strongest Topics"} topics={strongTopics} /></div>
              <div><UserLeaderBoard title={"User Leaderboard"} users={users} /></div>
              <div><GroupLeaderBoard title={"Group Leaderboard"} groups={groups} /></div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard