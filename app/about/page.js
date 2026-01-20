import React from 'react'
import Hero from '../components/about/Hero'
import Timeline from '../components/about/Timeline'
import Leadership from '../components/about/Leadership'
import GlobalPresence from '../components/about/GlobalPresence'

const page = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <Leadership />
      <GlobalPresence />
    </div>
  )
}

export default page