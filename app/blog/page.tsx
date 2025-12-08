import React, { Suspense } from 'react'
import Loading from '../components/Loading'
import Blogs from './Blogs'

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900">Latest Blogs</h1>
                <p className="text-gray-600 mt-3">Stay updated with our latest articles.</p>
            </div>

            {<Suspense fallback={<Loading />}>

                <Blogs />
            </Suspense>}
        </div>
    )
}

export default page