import { Apiservices } from "../middlewares/apiServices";

const headers = {
  "content-type": "application/json",
};

const userQuery = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    signupUser: build.mutation({
      query: (userinfo) => ({
        url: "/signup",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    loginUser: build.mutation({
      query: (userinfo) => ({
        url: "/login",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    passwordForgotten: build.mutation({
      query: (userinfo) => ({
        url: "/user-passwordreset",
        method: "POST",
        body: userinfo,
        headers,
      }),
    }),
    mailVerify: build.mutation({
      query: (otp) => ({
        url: "/email-verify",
        method: "POST",
        body: otp,
        headers,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useMailVerifyMutation,
  usePasswordForgottenMutation,
} = userQuery;
