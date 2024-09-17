import Image from "next/image";

import github from "../[slug]/assets/aside/github.svg";
import pen from "../[slug]/assets/aside/pen.svg";
import slack from "../[slug]/assets/aside/slack.svg";

const AsideCTA = ({ slug }: { slug: string }) => {
  // https://developers.google.com/tag-platform/tag-manager/datalayer#tag-manager
  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== "undefined") {
      dataLayer = dataLayer || [];
      dataLayer.push({ event: "aside_cta_click", path: `/blog/${slug}` });
    }
  };

  return (
    <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col flex-wrap justify-between gap-x-10 gap-y-4 rounded-2xl bg-[#FFE8D7] p-9 font-medium text-[#A18072] sm:flex-row lg:mt-0">
      <div className="flex flex-col gap-y-1">
        <p>Like this Article?</p>
        <a
          href="https://github.com/permitio"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1 text-[#43302B] transition duration-300 hover:opacity-60"
        >
          <span className="pointer-events-none">Star us on Github</span>{" "}
          <Image className="pointer-events-none" src={github} alt="" />
        </a>
      </div>
      <div className="flex flex-col gap-y-1">
        <p>Disagree?</p>
        <a
          href="https://io.permit.io/blog-slack"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1 text-[#43302B] transition duration-300 hover:opacity-60"
          onClick={() => dataLayerHandler()}
        >
          <span className="pointer-events-none">Tell us why</span>{" "}
          <Image className="pointer-events-none" src={slack} alt="" />
        </a>
      </div>
      <div className="flex flex-col gap-y-1">
        <p>Want more?</p>
        <a
          href="https://io.permit.io/blogstack"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1 text-[#43302B] transition duration-300 hover:opacity-60"
        >
          <span className="pointer-events-none">Join our Substack</span>{" "}
          <Image className="pointer-events-none" src={pen} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AsideCTA;
