export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-500 mt-2">Page Not Found</p>

      <a
        href="/"
        className="mt-6 text-blue-600 underline hover:text-blue-800"
      >
        Go Home
      </a>
    </div>
  );
}
