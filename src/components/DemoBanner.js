import React from "react"
import { useForm } from "react-hook-form"

const DemoBanner = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmitAbout = data => {
    console.log(data)
    console.log(errors)
  }

  return (
    <div className="container">
      <div className="demo_banner_wrapper">
        <div className="demo_banner">
          <h1>Request a Demo</h1>
          <form onSubmit={handleSubmit(onSubmitAbout)}>
            <input
              type="text"
              placeholder="enter your email"
              name="emailFromBanner"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input className="submitBtn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default DemoBanner
