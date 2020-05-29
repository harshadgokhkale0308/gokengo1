import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

//Icons

import { AiFillDatabase } from "react-icons/ai"
import { GoIssueClosed } from "react-icons/go"
import { DiGoogleAnalytics } from "react-icons/di"

const MissingLink = () => {
  const [missingLinkRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()

  useEffect(() => {
    if (inView) {
      tl.staggerFrom(".text_inner", 0.5, { y: 100, ease: Power3.easeOut }, 0.2)
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
    <div className="container bg_white">
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
            <AiFillDatabase className="icon"></AiFillDatabase>
            <h1>Data Acquisition</h1>
            <p>
              Every operation manages volumes of data that comes from disparate
              sources. GokenGO lets you capture data manually, through sensors
              and via seamless connectivity with your existing systems.
            </p>
          </div>
          <div className="final_card card_two">
            <GoIssueClosed className="icon"></GoIssueClosed>
            <h1>Issue Management</h1>
            <p>
              Managing the operations should not be a fire fighting job. Let our
              issue management module be a tool for problem solving, event
              management and task resolution.
            </p>
          </div>
          <div className="final_card card_three">
            <DiGoogleAnalytics className="icon"></DiGoogleAnalytics>
            <h1>Data Analytics</h1>
            <p>
              If you can measure it, you have more opportunities to improve. Use
              our data analytics module for putting things in perspective by
              comparing data across time and location
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissingLink
