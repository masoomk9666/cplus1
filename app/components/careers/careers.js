"use client"

import React, { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import Link from "next/link"

const locations = ["Pakistan", "USA", "UK", "UAE"]

const allJobs = [
  {
    title: "Pre - Sales Engineer",
    posted: "Posted 3 Days Ago",
    type: "On-Site",
    location: "Lahore, Punjab, Pakistan",
    country: "Pakistan",
    department: "Pre Sales",
    time: "Full Time",
  },
  {
    title: "Frontend Developer",
    posted: "Posted 2 Days Ago",
    type: "Remote",
    location: "New York, USA",
    country: "USA",
    department: "Engineering",
    time: "Full Time",
  },
  {
    title: "UI/UX Designer",
    posted: "Posted 5 Days Ago",
    type: "Hybrid",
    location: "London, UK",
    country: "UK",
    department: "Design",
    time: "Full Time",
  },
  {
    title: "Backend Developer",
    posted: "Posted 1 Day Ago",
    type: "On-Site",
    location: "Dubai, UAE",
    country: "UAE",
    department: "Engineering",
    time: "Full Time",
  },
  {
    title: "Pre - Sales Engineer",
    posted: "Posted 3 Days Ago",
    type: "On-Site",
    location: "Lahore, Punjab, Pakistan",
    country: "Pakistan",
    department: "Pre Sales",
    time: "Full Time",
  },
]

const Careers = () => {
  const [activeTab, setActiveTab] = useState("Pakistan")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter jobs by country + search
  const filteredJobs = allJobs.filter((job) => {
    const matchesCountry = job.country === activeTab
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCountry && matchesSearch
  })

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="text-[16px]  px-4 py-2 ">
            CAREERS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[40px] md:text-[48px] font-medium mb-3">
          Open Positions
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-[18px] max-w-3xl mx-auto mb-10">
        Your Future, Engineered at Indium AI may power our systems — but people power Indium. Join us, and let’s engineer infinite possibilities together.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveTab(loc)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === loc
                    ? "bg-black text-white"
                    : "bg-[#E3E3E3] text-gray-700"
                }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="SEARCH"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg py-3 pl-10 pr-12 text-sm outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Jobs List */}
        <div className="divide-y">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
           <Link href="/careers/overview" 
             className="block py-6 hover:bg-gray-50 transition"
             >

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center text-sm">

                  <div className="md:col-span-2">
                    <h3 className="text-[#3CDB9D] font-medium">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{job.posted}</p>
                  </div>

                  <div className="text-gray-600">{job.type}</div>
                  <div className="text-gray-600">{job.location}</div>
                  <div className="text-gray-600">{job.department}</div>
                  <div className="text-gray-600">{job.time}</div>

                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              No jobs found.
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

export default Careers
