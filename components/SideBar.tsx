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
    <Sidebar className='p-2 sm:p-4 pt-4 sm:pt-8 rounded-r-3xl shadow-lg'>
      <SidebarHeader className='bg-white'>
        <Image 
          src={Tesla} 
          alt='tesla'
          className="w-24 sm:w-32"
        />
      </SidebarHeader>
      <SidebarContent className='bg-white mt-2'>
        <SidebarGroup className='space-y-1 sm:space-y-2'>
          <div className='sideBar'><TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>Reports</span></div>
          <div className='sideBar'><Zap className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>Library</span></div>
          <div className='sideBar'><UsersRound className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>People</span></div>
          <div className='sideBar'><BookOpenCheck className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>Activities</span></div>
        </SidebarGroup>
        <SidebarHeader className='font-semibold text-base sm:text-lg text-gray-400 mt-4'>Support</SidebarHeader>
        <SidebarGroup className='space-y-1 sm:space-y-2'>
          <div className='sideBar'><Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>Get Started</span></div>
          <div className='sideBar'><Settings className="w-4 h-4 sm:w-5 sm:h-5" /><span className='my-auto text-xs sm:text-sm'>Settings</span></div>
        </SidebarGroup>
      </SidebarContent>
      <hr className="border-b border-gray-300 mb-4 w-full mx-auto" />
      <SidebarFooter className='bg-white'>
        <div className='flex flex-col space-y-1'>
          <Avatar>
            <AvatarImage src="https://placehold.co/64" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <span className='text-sm sm:text-base font-bold text-black'>Sam Wheeler</span>
          <span className='text-xs sm:text-sm text-gray-400 font-semibold'>samwheeler@example.com</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SideBar

