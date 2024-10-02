import Announcements from '@/components/Announcements'
import AttendanceChartContainer from '@/components/AttendanceChartContainer'
import AttendandanceChart from '@/components/AttendandanceChart'
import CountChart from '@/components/CountChart'
import CountChartContainer from '@/components/CountChartContainer'
import EventCalendar from '@/components/EventCalendar'
import FinaceCharts from '@/components/FinaceCharts'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* leftside */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* usercard */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='admin'/>
          <UserCard type='teacher'/>
          <UserCard type='student'/> 
          <UserCard type='parent'/>
        </div>
        {/* middle chart */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* count chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChartContainer/>
          </div>
          {/* attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
           <AttendanceChartContainer/>
          </div>
        </div>
        {/* bottom chart */}
       <div className='w-full h-[500px]'>
           <FinaceCharts/>
       </div>
      </div>
      {/* right side */}
      <div className='w-full flex flex-col gap-8 lg:w-1/3'>
        <EventCalendar/>
        <Announcements/>
      </div>

    </div>
  )
}

export default AdminPage