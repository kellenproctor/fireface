export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  return (
    <main className="ml-4 mt-4">
      <h1 className="mb-6 text-5xl">About</h1>
      <p>We are a social media company!</p>
    </main>
  );
}
