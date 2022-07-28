import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserRequest } from "../../store/actions/authAction";
import { RootState } from "../../store/reducers/rootReducer";

type User = {
  email: string;
  password: string;
};

const SignUp: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { pending, error } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = () => {
    dispatch(createUserRequest());
  };

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
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <></>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Password
                </label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword2"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
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
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
              {pending ? (
                <button
                  type="submit"
                  className="btn btn-primary bg-dark border-0"
                >
                  <div
                    className="spinner-border text-light"
                    role="status"
                  ></div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary bg-dark border-0"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
