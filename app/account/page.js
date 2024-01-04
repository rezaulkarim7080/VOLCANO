"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/AuthContext";

const Page = () => {
    const { user, logOut } = useUserAuth();


    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };


    const name =
        user?.email && user.email.includes("@")
            ? capitalizeFirstLetter(user.email.split("@")[0])
            : "";

    return (
        <div>
            <div className="p-10">
                <div className=" ">
                    <div className=" mt-[10px] flex flex-col justify-center items-center">
                        {/* profile form  */}
                        <div className="w-full max-w-md m-auto my-6 rounded-md ">
                            <div>
                                <div>
                                    <h2 className="mb-3 text-3xl font-semibold text-center">
                                        User Profile
                                    </h2>
                                </div>
                            </div>

                            {/* Form here */}
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <label className="block text-xl"> Name</label>
                                        <h1 className="text-3xl text-green-500">{name}</h1>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xl">Email </label>
                                        <h1 className="md:text-3xl text-xl text-red-500">
                                            {" "}
                                            {user?.email}
                                        </h1>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
