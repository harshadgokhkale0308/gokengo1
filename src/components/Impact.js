import React, { useEffect } from "react"
import { FaCentos } from "react-icons/fa"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

const Impact = () => {
  const [impactref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let tl = new TimelineLite()
      tl.staggerFrom(
        ".text_inner",
        0.8,
        { y: 100, ease: Power3.easeOut },
        0.3,
        0.7
      )
        .from(".impact_content p", 0.4, {
          opacity: 0,
          y: 10,
          ease: Power3.easeOut,
        })
        .from(".money_text", 0.4, { opacity: 0, y: 10, ease: Power3.easeOut })
        .staggerFrom(
          ".impact_node",
          0.4,
          { opacity: 0, y: 10, ease: Power3.easeOut },
          0.2
        )
        .from(".requestDemoBtn", 0.4, {
          opacity: 0,
          y: 100,
          ease: Power3.easeOut,
        })
    }
  }, [inView])

  return (
    <div className="container">
      <div className="impact_wrapper" ref={impactref}>
        <div className="impact_content">
          <h1>
            <div className="wrapper_anim_text">
              <div className="text_inner">Impact of</div>
            </div>{" "}
            <div className="wrapper_anim_text">
              <div className="text_inner">workflow</div>
            </div>{" "}
            <div className="wrapper_anim_text">
              <div className="text_inner">optimisation</div>
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
            <FaCentos className="icon"></FaCentos>
            <p>
              a simple tool to aggregate shift-wise information helped one of
              our client create huge economic impact
            </p>
          </div>
          <div className="impact_node">
            <FaCentos className="icon"></FaCentos>
            <p>
              a simple tool to aggregate shift-wise information helped one of
              our client create huge economic impact
            </p>
          </div>
          <div className="impact_node">
            <FaCentos className="icon"></FaCentos>
            <p>
              a simple tool to aggregate shift-wise information helped one of
              our client create huge economic impact
            </p>
          </div>
          <div className="impact_node">
            <FaCentos className="icon"></FaCentos>
            <p>
              a simple tool to aggregate shift-wise information helped one of
              our client create huge economic impact
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Impact
