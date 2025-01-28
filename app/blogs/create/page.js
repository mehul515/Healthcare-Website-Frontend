'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
// import { AlertCircle } from 'lucide-react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from "sonner";

export default function AddBlogForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields')
      toast.error('Please fill in all fields!')
      return
    }

    // Here you would typically send the data to your backend API
    console.log('Submitting new blog post:', { title, content })

    // TODO: Implement actual API call here
    // const response = await fetch('/api/blogs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title, content }),
    // })

    // if (response.ok) {
    //   router.push('/blogs')  // Redirect to blogs list after successful submission
    // } else {
    //   setError('Failed to submit blog post. Please try again.')
    // }

    // For now, we'll just clear the form
    setTitle('')
    setContent('')
    toast.success('Blog post submitted successfully!')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md my-14">
        <Toaster position="top-center"/>
      <CardHeader className="bg-gradient-to-r from-[#6fa3f2] to-[#75d4d2] text-white rounded-t-lg">
        <CardTitle className="text-2xl">Create a New Health Blog Post</CardTitle>
        <CardDescription className="text-blue-100">Share your healthcare insights with our community</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter the blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your blog content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          {error && (
            <div className="flex items-center text-red-600 space-x-2">
              {/* <AlertCircle size={20} /> */}
              <span>{error}</span>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-[#6fa3f2] to-[#75d4d2] text-white hover:opacity-90"
          >
            Publish Blog Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}