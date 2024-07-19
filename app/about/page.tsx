import Link from 'next/link';
import React from 'react';

type AboutPageProps = {};

const AboutPage = (props: AboutPageProps) => {
  return (
    <>
      <div>about page</div>
      <Link href="/">Main page</Link>
    </>
  );
};

export default AboutPage;
