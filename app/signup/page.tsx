"use client";

import * as React from "react";
import { Divider } from "@mui/material";
import { FaGoogle } from "react-icons/fa";

export default function Signin() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-400">
              {"Create an account"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full bg-gray-500 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md bg-gray-500 border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-gray-600 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "white",
              },
            }}
            style={{ borderColor: "white", opacity: ".25" }}
          >
            or continue with
          </Divider>
          <div>
            <button className="group relative flex w-full items-center justify-center rounded-md bg-gray-300 py-2 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
              <FaGoogle  className="mr-2"/>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign up with Google
            </button>
          </div>
          <div className="text-sm group relative flex w-full justify-center">
            <p className="px-2">{"Already have an account? "}</p>
            <a
              href="/signin"
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Sign in.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
