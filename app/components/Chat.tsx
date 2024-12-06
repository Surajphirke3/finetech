'use client'

import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyA5hjWG0e3bGOko_vqkJ3u8eln0w_ua3Ek')

interface ChatProps {
  userType: 'student' | 'employee' | 'retired'
}

export default function Chat({ userType }: ChatProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `You are a FinTech education assistant for ${userType}s. Provide concise, relevant financial advice based on the following question: ${input}`
      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      setMessages((prev) => [...prev, { role: 'assistant', content: text }])
    } catch (error) {
      console.error('Error generating response:', error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg max-h-96 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`p-4 ${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <p className="font-semibold">{message.role === 'user' ? 'You' : 'Assistant'}:</p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-l-lg p-2"
          placeholder="Ask a question..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Send</button>
      </form>
    </div>
  )
}

