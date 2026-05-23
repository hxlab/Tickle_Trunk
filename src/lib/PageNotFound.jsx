import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
        <Link to="/" className="inline-flex rounded-lg bg-purple-700 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-800">
          Return home
        </Link>
      </div>
    </main>
  );
}
