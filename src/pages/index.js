import React from "react"
import tw from 'twin.macro'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import StartSection from '../components/StartSection'
import EventSection from '../components/EventSection'
import InfoSection from '../components/InfoSection'
import SEO from '../components/SEO/seo'

const Section = styled.section`
${tw`relative flex justify-center items-center overflow-hidden pt-20`}
min-height: 100vh;
`;

const HeroSection = styled.section`
${tw`relative h-screen flex justify-center items-center overflow-hidden`}
`;
// create seperate section for StartSection later on. 
//The other section - elements dont need overflow-hidden or pos relative.


export const query = graphql`
query {
  prismic {
    allContacts {
      edges {
        node {
          body {
            ... on PRISMIC_ContactBodyContact_image {
              type
              fields {
                contact_link {
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                }
                contact_logo
              }
            }
          }
          headline
        }
      }
    }
    allEvents {
      edges {
        node {
          info
          name
          host
          date
          image
          _meta {
            id
            uid
            type
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({ data }) => {
  const contactData = data.prismic.allContacts.edges.slice(0, 1).pop()
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection>
        <StartSection />
      </HeroSection>
      <Section>
        <EventSection data={data} />
      </Section>
      <Section>
        <InfoSection data={contactData} />
      </Section>
    </Layout>
  )
}

export default IndexPage
