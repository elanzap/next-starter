import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import Image from "next/image"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex-col gap-4 xl:flex-row'>
        {/* LEFT */}
        <div className='w-full xl:w-2/3'>
          {/* TOP */}
          <div className='flex flex-col lg:flex-row gap-4'>
            {/* Info Card */}
            <div className='bg-zeidSky py-6 px-4 rounded-md flex-1 flex gap-4'>
              <div className='w-1/3'>
                <Image src='https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg'
                alt="" 
                width={144} 
                height={144} 
                className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <div className='w-2/3 flex flex-col justify-between gap-4'>
                <h1 className="text-xl font-semibold">George Antzoulis</h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                  <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                    <Image src='/blood.png' alt="" width={14} height={14}/>
                    <span>A+</span>
                  </div>
                  <div className='w-full md:w-1/3 flex items-center gap-2'>
                    <Image src='/date.png' alt="" width={14} height={14}/>
                    <span>November 2024</span>
                  </div>
                  <div className='w-full md:w-1/3 flex items-center gap-2'>
                    <Image src='/mail.png' alt="" width={14} height={14}/>
                    <span>gantzoulis@hotmail.com</span>
                  </div>
                  <div className='w-full md:w-1/3 flex items-center gap-2'>
                    <Image src='/phone.png' alt="" width={14} height={14}/>
                    <span>6970142125</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Small Cards */}
            <div className='flex-1 flex gap-4 justify-between flex-wrap'>
              {/* CARD */}
              <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image 
                  src="/singleBranch.png" 
                  alt="" 
                  height={24} 
                  width={24} 
                  className="w-6 h-6"/>
                <div className=''>
                  <h1 className="text-xl font-semibold">2</h1>
                  <span className="text-sm text-gray-400">Branches</span>
                </div>
              </div>
              {/* CARD */}
              <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image 
                  src="/singleLesson.png" 
                  alt="" 
                  height={24} 
                  width={24} 
                  className="w-6 h-6"/>
                <div className=''>
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Lesson</span>
                </div>
              </div>
              {/* CARD */}
              <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image 
                  src="/singleClass.png" 
                  alt="" 
                  height={24} 
                  width={24} 
                  className="w-6 h-6"/>
                <div className=''>
                  <h1 className="text-xl font-semibold">1</h1>
                  <span className="text-sm text-gray-400">Classes</span>
                </div>
              </div>
              {/* CARD */}
              <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image 
                  src="/singleAttendance.png" 
                  alt="" 
                  height={24} 
                  width={24} 
                  className="w-6 h-6"/>
                <div className=''>
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
            <div className='mt-4 bg-white rounded-md p-4 h-[800]'>
              <h1>Instructors Schedule</h1>
              <BigCalendar/>
            </div>
        </div>
        {/* RIGHT */}
        <div className='w-full xl:w-1/3'>
        <Announcements />
        </div>
    </div>
  )
}

export default SingleTeacherPage