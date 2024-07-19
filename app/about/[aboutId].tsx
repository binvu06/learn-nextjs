import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const AboutPageId = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div>aboutPageId</div>;<p>{JSON.stringify(router.query)}</p>
    </>
  );
};

export default AboutPageId;
