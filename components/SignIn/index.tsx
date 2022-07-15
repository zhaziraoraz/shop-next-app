import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const SignIn: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <section className="signin">
      <div className="container mx-auto">
        <div className="row align-items-center ">
          <div className="col d-flex justify-content-center m-2">
            <img
              src="images/signin/signIn.svg"
              className="d-block rounded-2"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <div className="col m-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message} </span>
                )}
              </div>

              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type={`${isShown ? "text" : "password"}`}
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                />
                <span className="input-group-text">
                  {isShown ? (
                    <i
                      className="bi bi-eye"
                      onClick={() => setIsShown(false)}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-eye-slash"
                      onClick={() => setIsShown(true)}
                    ></i>
                  )}
                </span>
              </div>
              <div className="error-message my-2">
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-dark border-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
