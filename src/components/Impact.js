import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

// Icons

import { AiOutlineFieldTime, AiOutlineFileDone } from "react-icons/ai"
import { TiGroupOutline } from "react-icons/ti"
import { DiGoogleAnalytics } from "react-icons/di"

const Impact = () => {
  const [impactref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()
  useEffect(() => {
    if (inView) {
      tl.staggerFrom(
        ".text_inner",
        0.8,
        { y: 100, ease: Power3.easeOut },
        0.3,
        0.6
      )
        .from(
          ".impact_content p",
          0.2,
          {
            opacity: 0,
            y: 10,
            ease: Power3.easeOut,
          },
          "-=0.6"
        )
        .from(".money_text", 0.4, { opacity: 0, y: 10, ease: Power3.easeOut })
        .staggerFrom(
          ".impact_node",
          0.4,
          { opacity: 0, y: 10, ease: Power3.easeOut },
          0.2
        )
        .from(".requestDemoBtn", 0.4, {
          opacity: 0,
          y: 10,
          ease: Power3.easeOut,
        })
    }
  }, [inView, tl])

  return (
    <div className="container bg_white">
      <div className="impact_wrapper" ref={impactref}>
        <div className="impact_content">
          <h1>
            <div className="wrapper_anim_text">
              <div className="text_inner">Impact of</div>
            </div>{" "}
            <div className="wrapper_anim_text">
              <div className="text_inner">Workflow</div>
            </div>{" "}
            <div className="wrapper_anim_text">
              <div className="text_inner">Optimisation</div>
            </div>{" "}
          </h1>
          <p>
            a simple tool to aggregate shift-wise information helped one of our
            client create huge economic impact
          </p>
          <div className="money_text">
            $25,0000
            <span>saved annually</span>
          </div>
          <button className="requestDemoBtn">Request a Demo</button>
        </div>

        <div className="impact_nodes">
          <div className="impact_node">
            <AiOutlineFieldTime className="icon"></AiOutlineFieldTime>
            <p>
              Reduced time for data collection from <b>8</b> hours to <b>2</b>{" "}
              minutes
            </p>
          </div>
          <div className="impact_node">
            <TiGroupOutline className="icon"></TiGroupOutline>
            <p>
              Impacted <b>60 employees</b> every shift
            </p>
          </div>
          <div className="impact_node">
            <AiOutlineFileDone className="icon"></AiOutlineFileDone>
            <p>
              Daily, Weekly and Monthly Report on <b>single click</b>
            </p>
          </div>
          <div className="impact_node">
            <DiGoogleAnalytics className="icon"></DiGoogleAnalytics>
            <p>
              <b>25%</b> Reduction in Manual Error
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Impact
