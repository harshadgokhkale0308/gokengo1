import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

const Summary = () => {
  const data = useStaticQuery(graphql`
    query Images {
      Image: file(relativePath: { eq: "placeholder.jpg" }) {
        id
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()
  useEffect(() => {
    if (inView) {
      tl.from(".heading_inner", 1, {
        y: 350,
        ease: Power3.easeOut,
      })
        .from(".heading p", 0.8, { opacity: 0, y: 20, ease: Power3.easeOut })
        .staggerFrom(
          ".summary_video",
          1,
          {
            opacity: 0,
            y: 200,
            ease: Power3.easeOut,
          },
          0.2
        )
    }
  }, [inView, tl])

  return (
    <div className="container bg_white">
      <div className="summary_wrapper" ref={ref}>
        <div className="heading">
          <h1>
            <div className="heading_inner">Why GokenGo.</div>
          </h1>
          <p>
            GokenGo is a 24 hour operations monitoring that enables huge savings
            powered by the inbuilt shift handover process.
          </p>
        </div>
        <div className="summary_videos_wrapper">
          <div className="summary_video">
            <Img fixed={data.Image.childImageSharp.fixed}></Img>
            <div className="heading">Heading</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="summary_video">
            <Img fixed={data.Image.childImageSharp.fixed}></Img>
            <div className="heading">Heading</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="summary_video">
            <Img fixed={data.Image.childImageSharp.fixed}></Img>
            <div className="heading">Heading</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
