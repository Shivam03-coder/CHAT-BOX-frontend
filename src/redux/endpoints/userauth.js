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
      query: (userinfo) => ({
        url: "/userpasswordchange",
        method: "POST",
        body: userinfo,
        headers,
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: "/userlogout",
        method: "POST",
        headers,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
  useLogoutUserMutation,
} = userQuery;
