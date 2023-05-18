export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  return (
    <main className="ml-8 mt-16">
      <h1 className="mb-6 text-5xl">About</h1>
      <p>We are a social media company!</p>
    </main>
  );
}
