const SectionAbout = () => {
  return (
    <section className='relative z-10 bg-[#1F1206] px-5 py-14 text-[#FEFCFB] lg:py-24'>
      <div className='container flex max-w-[654px] flex-col gap-y-4'>
        <p>
          Permit.io was founded after we found ourselves building Identity
          Access Management (IAM) mechanisms again and again at the companies we
          were working at, instead of focusing on core business development.
        </p>
        <p>
          Since most companies still do that today, we built a full-stack
          authorization framework that makes it quick and intuitive for
          developers to bake in access-control into their products and empower
          the rest of their organization with low-code
        </p>
        <p>
          It&apos;s clear the future is more interconnected and more automated.
          We are here to provide the infrastructure to safely enable that future
          across software and take away the pain of creating these fundamental
          building blocks.
        </p>
        <p>
          We are passionate about great software, developer tools, open source
          and amazing customer experiences. That&apos;s why we prioritize
          end-to-end solutions that have a good UI and are open-source and
          community-based.
        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
