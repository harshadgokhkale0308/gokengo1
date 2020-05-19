import React, { useEffect, useState, useRef } from "react"
import { TimelineLite, Power3 } from "gsap"

const Features = () => {
  let [animateFeatureOne, setAnimateFeatureOne] = useState(null)
  let [animateFeatureTwo, setAnimateFeatureTwo] = useState(null)
  let [animateFeatureThree, setAnimateFeatureThree] = useState(null)
  let [animateFeatureFour, setAnimateFeatureFour] = useState(null)
  let [animateFeatureFive, setAnimateFeatureFive] = useState(null)
  let [animateFetaureSiz, setAnimateFeatureSix] = useState(null)

  // Feature One
  let tl = new TimelineLite()
  let featureRefOne = useRef(null)
  let featureContentOneRef = useRef(null)
  let featureQuestionOneRef = useRef(null)

  // Feature Two
  let tl2 = new TimelineLite()
  let featureRefTwo = useRef(null)
  let featureContentTwoRef = useRef(null)
  let featureQuestionTwoRef = useRef(null)

  // Feature Three
  let tl3 = new TimelineLite()
  let featureRefThree = useRef(null)
  let featureContentThreeRef = useRef(null)
  let featureQuestionThreeRef = useRef(null)

  // Feature Four
  let tl4 = new TimelineLite()
  let featureRefFour = useRef(null)
  let featureContentFourRef = useRef(null)
  let featureQuestionFourRef = useRef(null)

  // Feature Five
  let tl5 = new TimelineLite()
  let featureRefFive = useRef(null)
  let featureContentFiveRef = useRef(null)
  let featureQuestionFiveRef = useRef(null)

  // Feature Six
  let tl6 = new TimelineLite()
  let featureRefSix = useRef(null)
  let featureContentSixRef = useRef(null)
  let featureQuestionSixRef = useRef(null)

  useEffect(() => {
    setAnimateFeatureOne(
      tl
        .to(featureRefOne, 0.2, { width: "100%", ease: Power3.easeIn })
        .to(featureContentOneRef, 0.2, {
          opacity: 0,
          y: -20,
          ease: Power3.easeOut,
        })
        .from(featureQuestionOneRef, 0.2, {
          opacity: 0,
          y: 20,
          ease: Power3.easeOut,
        })
        .to(featureRefOne, 0.2, { css: { background: "#efeeee" } })
    )

    setAnimateFeatureTwo(
      tl2
        .to(featureContentTwoRef, 0.2, {
          opacity: 0,
          y: -20,
          ease: Power3.easeOut,
        })
        .from(featureQuestionTwoRef, 0.2, {
          opacity: 0,
          y: 20,
          ease: Power3.easeOut,
        })
        .to(featureRefTwo, 0.2, { css: { background: "#efeeee" } })
    )
  }, [])

  //  Mouse Handlers
  const onMouseEnterHandlerOne = () => {
    animateFeatureOne.play()
  }
  const onMouseLeaveHandlerOne = () => {
    animateFeatureOne.reverse()
  }

  const onMouseEnterHandlerTwo = () => {
    animateFeatureTwo.play()
  }
  const onMouseLeaveHandlerTwo = () => {
    animateFeatureTwo.reverse()
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
          onMouseEnter={onMouseEnterHandlerOne}
          onMouseLeave={onMouseLeaveHandlerOne}
        >
          <div ref={el => (featureRefOne = el)} className="feature_container">
            <div ref={el => (featureContentOneRef = el)}>
              <h1>Record</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div
            ref={el => (featureQuestionOneRef = el)}
            className="feature_question"
          >
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div
          className="feature_two"
          onMouseEnter={onMouseEnterHandlerTwo}
          onMouseLeave={onMouseLeaveHandlerTwo}
          ref={el => (featureRefTwo = el)}
        >
          <div
            className="feature_container"
            ref={el => (featureContentTwoRef = el)}
          >
            <div>
              <h1>Record</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div
            className="feature_question"
            ref={el => (featureQuestionTwoRef = el)}
          >
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="feature_three">
          <div className="feature_container">
            <h1>Record</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature_question">
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="feature_four">
          <div className="feature_container">
            <h1>Record</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature_question">
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="feature_five">
          <div className="feature_container">
            <h1>Record</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature_question">
            <h1>Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="feature_six">
          <div className="feature_container">
            <h1>Record</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature_question">
            <h1>Heading</h1>
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

export default Features
