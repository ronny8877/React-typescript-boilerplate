/** @format */

import React, { ReactElement } from "react";

interface Props {}

export default function HomeScreen(props: Props): ReactElement {
  return (
    <div className="grid w-full place-items-center bg-gray-100 h-screen">
      <div className="w-[300px] bg-white shadow hover:shadow-xl cursor-pointer duration-200  rounded-2xl p-5">
        <p className="font-montserrat text-5xl text-center mt-20 mb-20">
          {" "}
          Happy coding..
        </p>
      </div>
    </div>
  );
}
