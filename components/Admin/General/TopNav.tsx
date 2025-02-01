"use client";
import { clearAuth, setAuth, TUser } from "@/redux/features/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

type Props = {
  response: {
    data: TUser | null;
    message: string | null;
    error: boolean;
  };
};
export const TopNav = ({ response }: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);

  const [navOpened, setNavOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ["flights", "hotels", "cars", "tours", "visa", "blogs"];

  const router = useRouter();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  const store = useAppSelector((store) => store.auth.values);
  useEffect(() => {
    if (response.error === false && response.data) {
      dispatch(setAuth(response.data));
    }
  }, []);

  const pathname = usePathname();

  return (
    <div
      className={`h-[70px] ${
        scrolled
          ? "bg-white/80 backdrop-blur-3xl text-black border-gray-500"
          : pathname === "/"
            ? "border-transparent text-white"
            : "bg-white/80 backdrop-blur-3xl  border-b-black"
      } border-b-2 duration-300 fixed  top-0 left-1/2 -translate-x-1/2 w-full z-[5000000] } `}
    >
      <div className="wrapper ">
        <div className=" xl:max-w-[1500px] flex justify-between items-center h-full w-full mx-auto px-3 xl:px-0">
          <Link href={"/"} className="flex gap-3 items-center">
            <img
              src="https://airgoworld.net/uploads/global/logo.png"
              className="h-16"
              alt=""
            />
          </Link>
          <div className="hidden lg:flex gap-10 capitalize items-center">
            <div className="flex gap-10 text-sm font-semibold cursor-pointer">
              {menuItems.map((el, key) => (
                <Link
                  href={`/${el}`}
                  key={key}
                  className="duration-300 uppercase hover:scale-110 active:scale-100 hover:text-blue-500"
                >
                  {el}
                </Link>
              ))}
            </div>
            {!store ? (
              <div
                onClick={() => router.push("/login")}
                className="text-sm uppercase flex cursor-pointer gap-2 items-center font-medium"
              >
                <BsPersonCircle className="inline align-middle text-lg mr-1" />
                Account
              </div>
            ) : (
              <div className="flex cursor-pointer relative group items-center gap-2">
                <div className="h-10 w-10 rounded-full border-2"></div>
                <p className="font-semibold text-[15px]">{store?.firstname}</p>
                <div className="h-40 bg-white group-hover:opacity-100 invisible group-hover:visible opacity-0 duration-300 rounded-md overflow-hidden text-black absolute top-[110%] w-40 shadow-md right-0">
                  <p
                    onClick={() => {
                      dispatch(clearAuth());
                      removeCookie("accessToken", { path: "/" });
                      removeCookie("refreshToken", { path: "/" });
                    }}
                    className="text-sm uppercase cursor-pointer text-center font-semibold p-3 bg-blue-500"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <FaBars
            onClick={() => setNavOpened(!navOpened)}
            className="lg:hidden text-xl cursor-pointer text-white"
          />
          <div
            className={`h-[calc(100vh-80px)] lg:hidden bg-white pt-10 text-center duration-500 fixed top-20  w-full z-[50000000] ${
              navOpened ? "left-0 opacity-100" : "left-[200vw] opacity-0"
            }`}
          >
            <div className="flex gap-5 text-black flex-col text-sm font-medium cursor-pointer">
              {menuItems.map((el, key) => (
                <p
                  key={key}
                  className="duration-300 hover:scale-110 active:scale-100 hover:text-blue-500"
                >
                  {el}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
