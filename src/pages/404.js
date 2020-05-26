import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import lottie from "lottie-web"

import notFoundAnim from "../lottie/404.json"

const NotFoundPage = () => {
  let animationContainer = useRef(null)
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer,
      animationData: notFoundAnim,
      loop: true,
    })
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container">
        <div className="not_found_page">
          <div
            className="animation_wrappper"
            ref={el => (animationContainer = el)}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
