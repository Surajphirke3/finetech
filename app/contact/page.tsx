export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl mb-6">
        We'd love to hear from you! If you have any questions, feedback, or inquiries about FinTech Edu, please don't hesitate to reach out.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <ul className="space-y-4">
          <li>
            <strong>Email:</strong> <a href="mailto:info@fintechedu.com" className="text-blue-600 hover:underline">info@fintechedu.com</a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (555) 123-4567
          </li>
          <li>
            <strong>Address:</strong> 123 FinTech Street, Innovation City, FC 12345
          </li>
        </ul>
      </div>
    </div>
  )
}

