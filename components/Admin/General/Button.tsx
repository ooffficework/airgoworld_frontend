'use client'

import React from "react";

type Props = {
  title: string;
  submit: () => any
  loading?: boolean;
  width?: string
  rounded?: boolean
};

export default function Button({ title, loading, rounded, submit, width}: Props) {
  return (
    <button onClick={submit} style={{width: `${width}`}} className={`h-14 bg-blue-600 ${rounded ? 'rounded-full' : 'rounded-md'} text-white font-semibold shadow-md duration-300 text-sm w-40 grid place-content-center bg-blue-500 ${!loading && "active:scale-95"}`}>
      {loading ? <span className="loader"></span> : title}
    </button>
  );
}
