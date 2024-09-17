import { FC } from 'react';

type Section2Props = {};

const Section2: FC<Section2Props> = ({}) => {
  return (
    <section>
      <div className='container relative mt-10 max-w-[940px] p-4 text-center text-base xl:mt-32 xl:text-2xl'>
        <div className='relative z-20 flex min-h-[256px] w-full items-center justify-center rounded-3xl bg-white p-6 shadow-video xl:p-12'>
          <p>
            As developers we found ourselves rebuilding access control again and
            again at the companies we worked at. We knew things had to change,
            so we started out by building and maintaining open source projects
            that help developers build and update permissions and access
            management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
