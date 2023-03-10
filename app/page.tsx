import "./page.module.css";
import React from 'react';
import Link from 'next/link'


export default function Homepage() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Link href='/signin'>Sign in</Link>
      </div>
    </>
  );
}
