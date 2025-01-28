'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";

// Function to format date to DD-MM-YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month, ensuring it's 2 digits
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog data from the backend
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://healthcare-website-backend.onrender.com/api/blog/getAll"); // Adjust the endpoint based on your backend
        setBlogs(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 py-10 px-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Healthcare Blogs
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading or Error State */}
      {loading && <p className="text-center text-gray-600">Loading blogs...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id} // Ensure unique key here
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            {/* Blog Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {blog.title}
            </h2>

            {/* Author Details */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={blog.author.image}
                alt={blog.author.name} // Assuming name exists in the author object
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {blog.author ? blog.author.name : "Unknown Author"}{" "}
                  {/* Display "Unknown Author" if the author is not found */}
                </p>
                {/* Format the blog date using formatDate */}
                <p className="text-xs text-gray-500">
                  {blog.date && formatDate(blog.date)} {/* Format the date */}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              {truncateText(blog.content, 120)}
            </p>

            {/* Read More Button */}
            <Link href={`/blogs/${blog._id}`}>
              <Button className="inline-block px-4 py-2 text-white rounded-lg text-center text-sm font-medium">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredBlogs.length === 0 && !loading && (
        <p className="text-center text-gray-600 mt-12">
          No blogs found. Try searching for something else.
        </p>
      )}
    </div>
  );
}