"use client";

export default function ErrorPage({ error, reset }: any) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>

      <p className="text-gray-600 mb-6">{error?.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
}
