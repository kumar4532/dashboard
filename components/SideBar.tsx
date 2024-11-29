import React from 'react'
import Tesla from '../public/TESLA.png'
import Image from 'next/image'
import { BookOpenCheck, Lightbulb, Settings, TrendingUp, UsersRound, Zap } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"

const SideBar = () => {
  return (
    <Sidebar className='p-4 pt-8 rounded-r-3xl shadow-lg'>
      <SidebarHeader className='bg-white'>
        <Image 
          src={Tesla} 
          alt='tesla'
        />
      </SidebarHeader>
      <SidebarContent className='bg-white mt-2'>
        <SidebarGroup className='space-y-2'>
          <div className='sideBar'><TrendingUp /><span className='my-auto'>Reports</span></div>
          <div className='sideBar'><Zap /><span className='my-auto'>Library</span></div>
          <div className='sideBar'><UsersRound /><span className='my-auto'>People</span></div>
          <div className='sideBar'><BookOpenCheck /><span className='my-auto'>Activities</span></div>
        </SidebarGroup>
        <SidebarHeader className='font-semibold text-lg text-gray-400'>Support</SidebarHeader>
        <SidebarGroup className='space-y-2'>
          <div className='sideBar'><Lightbulb /><span className='my-auto'>Get Started</span></div>
          <div className='sideBar'><Settings /><span className='my-auto'>Settings</span></div>
        </SidebarGroup>
      </SidebarContent>
      <hr className="border-b border-gray-300 mb-4 w-full mx-auto" />
      <SidebarFooter className='bg-white'>
        <div className='flex flex-col space-y-1'>
          <Avatar>
              <AvatarImage src="https://placehold.co/64" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className='text-xl font-bold text-black'>Sam Wheeler</span>
          <span className='text-sm text-gray-400 font-semibold'>samwheeler@example.com</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SideBar