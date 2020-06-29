import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'


const ContentWrapper = styled.div`
${tw`sm:flex px-5 sm:px-10 justify-center max-w-screen-xl`}

& article {
  ${tw`w-full sm:w-1/2`}
}

& img {
  ${tw`sm:pl-5 w-full sm:w-1/2`}
  object-fit: cover;
  object-position: center center;
}
`;

const Head = styled.p`
${tw`mb-10`}
font-family: 'PT Mono';
font-weight: 0.8rem;
`;

const EventSection = () => {
  const data = useStaticQuery(graphql`
  query {
    prismic {
      allEvents {
        edges {
          node {
            name
            info
            image
          }
        }
      }
    }
  }
  `);

  const doc = data.prismic.allEvents.edges.slice(0, 1).pop()
  console.log(doc)
  return (
    <ContentWrapper>
      <article>
        <Head>/next event</Head>
        <RichText render={doc.node.name} />
        <div>
          <RichText render={doc.node.info} />
        </div>
      </article>
      <img src={doc.node.image.url}></img>
    </ContentWrapper>
  )
}

export default EventSection