import React from 'react'
import ApplicationCard from './ApplicationCard'

function List() {
  return (
    <>
    <div className="flex flex-col items-center w-full md:w-1/2 mb-8">

        <div className="flex flex-shrink-0 flex-grow-0 p-6"> 
            <div className='text-sm text-center'>SVG icon goes here</div>
            <div className="flex flex-col">
                <div className='text-lg text-center px-4 hover:bg-slate-300'> Name of List</div>
                <div className='text-sm text-center'># of Jobs</div>
            </div>
            <div className='text-sm text-center'>Edit List Icon goes here</div>
        </div>
        <button className='bg-white w-80 h-8 rounded-sm shadow-lg ring-2 ring-slate-300'> Add Application</button>
        
        <div className="flex flex-col items-center justify-start shadow-sm mt-2 p-2 h-full w-full overflow-scroll">
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
        </div>
    </div>
    <div className="flex flex-col items-center w-full md:w-1/2 mb-8">

        <div className="flex flex-shrink-0 flex-grow-0 p-6"> 
            <div className='text-sm text-center'>SVG icon goes here</div>
            <div className="flex flex-col">
                <div className='text-lg text-center px-4 hover:bg-slate-300'> Name of List</div>
                <div className='text-sm text-center'># of Jobs</div>
            </div>
            <div className='text-sm text-center'>Edit List Icon goes here</div>
        </div>
        <button className='bg-white w-80 h-8 rounded-sm shadow-lg ring-2 ring-slate-300'> Add Application</button>

        <div className="flex flex-col items-center justify-start shadow-sm mt-2 p-2 h-full w-full overflow-scroll">
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
        </div>
    </div>
    <div className="flex flex-col items-center w-full md:w-1/2 mb-8">

        <div className="flex flex-shrink-0 flex-grow-0 p-6"> 
            <div className='text-sm text-center'>SVG icon goes here</div>
            <div className="flex flex-col">
                <div className='text-lg text-center px-4 hover:bg-slate-300'> Name of List</div>
                <div className='text-sm text-center'># of Jobs</div>
            </div>
            <div className='text-sm text-center'>Edit List Icon goes here</div>
        </div>
        <button className='bg-white w-80 h-8 rounded-sm shadow-lg ring-2 ring-slate-300'> Add Application</button>

        <div className="flex flex-col items-center justify-start shadow-sm mt-2 p-2 h-full w-full overflow-scroll">
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
        </div>
    </div>
    <div className="flex flex-col items-center w-full md:w-1/2 mb-8">

        <div className="flex flex-shrink-0 flex-grow-0 p-6"> 
            <div className='text-sm text-center'>SVG icon goes here</div>
            <div className="flex flex-col">
                <div className='text-lg text-center px-4 hover:bg-slate-300'> Name of List</div>
                <div className='text-sm text-center'># of Jobs</div>
            </div>
            <div className='text-sm text-center'>Edit List Icon goes here</div>
        </div>
        <button className='bg-white w-80 h-8 rounded-sm shadow-lg ring-2 ring-slate-300'> Add Application</button>

        <div className="flex flex-col items-center justify-start shadow-sm mt-2 p-2 h-full w-full overflow-scroll">
            <ApplicationCard />
            <ApplicationCard />
        </div>
    </div>
  </>
  )
}

export default List