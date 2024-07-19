'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  console.log(router);

  function handleClick() {
    router.push('/contact');
  }

  return (
    <main>
      <h1>Learn nextjs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid non? Similique a in
        libero magnam ipsum asperiores neque quod nemo adipisci! Fuga voluptas amet accusantium
        ratione nulla at dicta.
      </p>
      <button onClick={handleClick}>Go to contact</button>
      <div style={{ marginTop: '2000px' }}></div>
      <Link href="/about">About navigate</Link>
    </main>
  );
}
