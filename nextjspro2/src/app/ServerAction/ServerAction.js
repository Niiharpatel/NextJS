"use client";

import React, { useRef } from "react";
import { submitAction } from "@/app/actions/form";

function ServerAction() {
  let ref = useRef();
  return (
    <>
      <div className="w-2/3 mx-auto my-12">
        <form
          action={(e) => {
            submitAction(e);
            ref.current.reset();
          }}
          ref={ref}
        >
          <div className="my-4">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" className="text-black mx-4" />
          </div>
          <div className="my-4">
            <label htmlFor="add">Address</label>
            <input name="add" id="add" className="text-black mx-4" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ServerAction;
