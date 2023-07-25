import * as React from "react"
import { Seo } from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../layout/layout"
import Hero from "../components/homePage/hero"
import ComprehensiveSolutionCard from "../components/homePage/comprehensiveSolution"
import CurrentProcessCard from "../components/homePage/currentProcess"
import CompleteToolsetCard from "../components/homePage/completeToolset"
import TestimonialCard from "../components/homePage/testimonial/testimonialCard"
import ExclusivelyCard from "../components/homePage/exclusively"
import ConnectTools from "../components/toolsCarousel/connectTools"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      <FadeInFromBottom>
        <ComprehensiveSolutionCard />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <CurrentProcessCard />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <CompleteToolsetCard />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <TestimonialCard />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <ExclusivelyCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <ConnectTools />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
