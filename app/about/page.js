import React from 'react'
import Hero from '../components/about/Hero'
import Timeline from '../components/about/Timeline'
import Leadership from '../components/about/Leadership'
import GlobalPresence from '../components/about/GlobalPresence'
import Cta from '../components/about/Cta'
import CultureSection from '../components/about/CultureSection'
import Layout from '../components/Layout'

const page = () => {
  return (
    <Layout footerType="A">
      <Hero />
      <Timeline />
      <Leadership />
      <GlobalPresence />
      <Cta />
      <CultureSection />
    </Layout>
  )
}

export default page