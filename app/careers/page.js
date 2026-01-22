import React from 'react'
import Hero from '../components/careers/hero'
import Process from '../components/careers/process'
import Careers from '../components/careers/careers'
import Layout from '../components/Layout'



const page = () => {
  return (
    <Layout footerType="B">
      <Hero />
      <Process />
      <Careers />
    </Layout>
  )
}

export default page