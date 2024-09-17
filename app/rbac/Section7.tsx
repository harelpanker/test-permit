"use client";

import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";
import image1 from "/public/images/rbac/s7-d.png";
import image2 from "/public/images/rbac/s7-m.png";

const Section7 = () => {
  const { width } = useViewportSize();

  return (
    <section className="bg-[#FFF1E7] px-5 py-16 text-center lg:px-12 lg:py-24">
      <div className="container flex max-w-[970px] flex-col items-center gap-6 md:gap-16">
        <header className="relative z-20 flex w-full max-w-[610px] flex-col gap-6">
          <div className="flex flex-col gap-4">
            {width >= 640 ? (
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F76808] lg:text-lg">
                Zero latency Permissions enforcement
              </h3>
            ) : (
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F76808] lg:text-lg">
                Zero latency enforcement
              </h3>
            )}
            {width >= 640 ? (
              <h2 className="bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text text-4xl font-bold text-transparent">
                Permit.check() in your app
              </h2>
            ) : (
              <h2 className="text-3xl font-bold text-transparent">
                <span className="bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text">
                  Permit.check
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text">
                  in your app
                </span>
              </h2>
            )}
          </div>

          {width >= 640 ? (
            <p className="text-lg font-medium text-[#43302B] lg:text-[22px]">
              Adding Permit to your app is as easy as calling a function -{">"}{" "}
              permit.check(identity, resource, action)
            </p>
          ) : (
            <p className="text-lg font-medium text-[#43302B] lg:text-[22px]">
              Adding Permit to your app is as easy as calling a function
              permit.check(identity, resource, action)
            </p>
          )}
        </header>
        <figure>
          <Image
            className="w-full max-w-sm md:max-w-full"
            src={width >= 640 ? image1 : image2}
            alt=""
          />
        </figure>
      </div>
    </section>
  );
};

export default Section7;
