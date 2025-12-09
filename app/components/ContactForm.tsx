'use client';

import React from 'react'
import { useState } from 'react';



export const metadata = {
  title: "Contact Us | My Blog",
  description: "Get in touch with us through our contact form.",
  icons: {
    icon: "/favicon.ico",
  },
};


const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form, "Form Data")
    alert("Submitted Successfully!");
    setForm({ name: '', email: '', message: '' })
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              name='name'
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              name='email'
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full border rounded-lg p-2 h-28 resize-none focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              name='message'
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
