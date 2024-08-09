import { createContext } from "react";
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
    userContactsList: build.mutation({
      query: (searchedItem) => ({
        url: "/usercontacts",
        method: "POST",
        headers,
        body: searchedItem,
        credentials: "include",
      }),
    }),
    getMsgs: build.mutation({
      query: (id) => ({
        url: "/getmsgs",
        method: "POST",
        headers,
        body: id,
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
  useUserContactsListMutation,
  useGetMsgsMutation,
} = userQuery;
