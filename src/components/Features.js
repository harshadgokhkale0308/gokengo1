import React, { useEffect, useState, useRef } from "react"
import { TimelineLite, Power3 } from "gsap"

const Features = () => {
  let [animateFeatureOne, setAnimateFeature] = useState(null)
  let tl = new TimelineLite()
  // featureOne
  let featureRefOne = useRef(null)
  let featureContentRef = useRef(null)

  useEffect(() => {
    setAnimateFeature(
      tl
        .to(featureRefOne, 0.2, { width: "100%", ease: Power3.easeIn })
        .to(featureContentRef, 0.2, {
          opacity: 0,
          y: -20,
          ease: Power3.easeOut,
        })
        .to(featureRefOne, 0.2, { css: { background: "#efeeee" } })
        .from(".feature_question", 0.2, {
          opacity: 0,
          y: 20,
          ease: Power3.easeOut,
        })
    )
  }, [])

  const onMouseEnterHandler = () => {
    console.log("this is called")
    animateFeatureOne.play()
  }
  const onMouseLeaveHandler = () => {
    console.log("Mouse Exit Called")
    animateFeatureOne.reverse()
  }

  return (
    <div className="container">
      <div className="features_wrapper">
        <div className="feature_content">
          <h1>
            our platform brings <br></br>it all together.
          </h1>
          <p>
            GokenGo is a 24 hour operations monitoring that enables huge savings
            powered by the inbuilt shift handover process
          </p>
        </div>
        <div
          className="feature_one"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div ref={el => (featureRefOne = el)} className="feature_container">
            <div ref={el => (featureContentRef = el)}>
              <h1>Record</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="feature_question">
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="feature_two">
          <h1>Record</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature_three">
          <h1>Record</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature_four">
          <h1>Record</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature_five">
          <h1>Record</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature_six">
          <h1>Record</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
