'use client'; // Ensure this is at the top

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import from next/navigation
import axios from 'axios'; // Import axios
import { Button } from '@/components/ui/button';

// Function to format date to DD-MM-YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month, ensuring it's 2 digits
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const BlogDetails = () => {
  const pathname = usePathname(); // Use usePathname to get the current path
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const id = pathname?.split('/').pop(); // Extract the 'id' from the pathname

      if (id) {
        setLoading(true);
        setError(null);

        try {
          // Make a GET request using axios
          const response = await axios.get(`https://healthcare-website-backend.onrender.com/api/blog/get/${id}`);
          console.log(response.data);
          setBlog(response.data); // Set the blog data from the API response
        } catch (error) {
          // Handle any errors, including network issues
          setError(error.response ? error.response.data.message : 'An error occurred');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlog();
  }, [pathname]); // Re-run effect when 'pathname' changes

  // Show loading state while the blog data is being fetched
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  // Show error state if something went wrong
  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Blog Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">{blog.title}</h1>

      {/* Author and Date */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={blog.author.image}
          alt={blog.author.name} // Render author name as the alt text
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="text-[18px] font-semibold text-gray-600">{blog.author.name}</p> {/* Render author's name */}
          <p className="text-[14px] text-gray-500">{formatDate(blog.date)}</p> {/* Format date */}
        </div>
      </div>

      {/* Full Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-600 mb-8">
        <p>{blog.content}</p>
      </div>

      {/* Back Button */}
      <Button
        onClick={() => window.history.back()}
        className="inline-block px-4 py-2 text-white rounded-lg text-center text-sm font-medium"
      >
        Back to Blogs
      </Button>
    </div>
  );
};

export default BlogDetails;