import React, { useEffect } from "react"
import { FiBookOpen } from "react-icons/fi"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

const MissingLink = () => {
  const [missingLinkRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()

  useEffect(() => {
    if (inView) {
      tl.staggerFrom(
        ".text_inner",
        0.5,
        { y: 100, ease: Power3.easeOut },
        0.2,
        0.2
      )
        .from(".sub_heading", 0.6, { opacity: 0, y: 10, ease: Power3.easeOut })
        .staggerFrom(
          ".card",
          0.4,
          { opacity: 0, y: 10, ease: Power3.easeOut },
          0.2
        )
    }
  }, [inView, tl])

  return (
    <div className="container">
      <div className="missing_link_wrapper" ref={missingLinkRef}>
        <h1 className="heading">
          <div className="anim_text_wrapper">
            <div className="text_inner">The Missing link in your daily</div>
          </div>
          <div className="anim_text_wrapper">
            <div className="text_inner">work management.</div>
          </div>
        </h1>
        <p className="sub_heading">
          We will not just provide the tools to get the job done, we will help
          you with the process and the results are there for you to see !
        </p>
        <div className="cards_holder">
          <div className="final_card card_one">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
          <div className="final_card card_two">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
          <div className="final_card card_three">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
          <div className="final_card card_one">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
          <div className="final_card card_two">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
          <div className="final_card card_three">
            <FiBookOpen className="icon"></FiBookOpen>
            <h1>Heading</h1>
            <p>
              We will not just provide the tools to get the job done, we will
              help you with the process and the results are there for you to
              see!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissingLink
