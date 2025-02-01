"use client";
import { setAuth, TUser } from "@/redux/features/auth";
import { useAppDispatch } from "@/redux/store/hook";
import React, { useEffect, useState } from "react";

type Props = {
  response: {
    data: TUser | null;
    message: string | null;
    error: boolean;
  };
};

export default function Auth({ response, }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (response.error === false && response.data) {
      dispatch(setAuth(response.data));
    }

  }, []);

  return <div className="absolute"></div>;
}
