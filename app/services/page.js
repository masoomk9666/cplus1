import React from 'react'
import Hero from '../components/services/Hero'
import Layout from '../components/Layout'
import BusinessModel from '../components/home/BusinessModel'
import WorkflowAutomation from '../components/home/WorkflowAutomation'
import SecurityScrollSection from '../components/services/SecurityScrollSection'
import CoreServices from '../components/services/CoreServices'

const page = () => {
  return (
    <Layout footerType='A'>
        <Hero />
        <CoreServices />
        <SecurityScrollSection />
        <WorkflowAutomation />
        <BusinessModel />
        
    </Layout>
  )
}

export default page