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
    changePassword: build.mutation({
      query: (newpassword) => ({
        url: "//user-passwordreset",
        method: "POST",
        body: newpassword,
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
  useChangePasswordMutation,
} = userQuery;
