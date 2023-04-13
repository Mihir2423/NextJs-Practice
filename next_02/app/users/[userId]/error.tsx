"use client"; // Error components must be Client components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-xl font-semibold text-center">
      <p className="mb-4">{error.message}</p>
      <Image
        className="w-96 h-96"
        src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
        width={500}
        height={500}
        alt="Error"
      />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <h1>or</h1>
      <Link href="/" >Go back to main page</Link>
    </div>
  );
}
