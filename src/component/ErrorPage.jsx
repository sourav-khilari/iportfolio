import React from 'react'
import { Link } from 'react-router-dom'
export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <h2 className="text-4xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}
