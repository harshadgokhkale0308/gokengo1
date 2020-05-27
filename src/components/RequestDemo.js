import React from "react"
import { useForm } from "react-hook-form"

const RequestDemo = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  console.log(errors)

  return (
    <div className="container bg_white" id="demo">
      <div className="request_demo_wrapper">
        <h1>Request Demo</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              ref={register({ required: true, maxLength: 80 })}
            ></input>
            {errors.firstName && (
              <div className="error">First name is required</div>
            )}
          </div>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              ref={register({ required: true, maxLength: 100 })}
            ></input>
            {errors.firstName && (
              <div className="error">First name is required</div>
            )}
          </div>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Email"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <div className="error">email is required</div>}
          </div>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Company"
              name="Company"
              ref={register}
            />
          </div>
          <div className="input_wrapper">
            <input
              type="tel"
              placeholder="Mobile"
              name="mobile"
              ref={register({ pattern: /^([9]{1})([234789]{1})([0-9]{8})$/i })}
            />
            {errors.mobile && (
              <div className="error">enter valid phonenumber</div>
            )}
          </div>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Country"
              name="Country"
              ref={register}
            />
          </div>
          <div className="submit_btn_wrapper">
            <input className="submitBtn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestDemo
