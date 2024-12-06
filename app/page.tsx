import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to FinTech Edu</h1>
      <p className="text-xl text-center mb-12">Choose your category to get personalized FinTech educational content:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UserTypeCard
          title="Young Student"
          description="Learn the basics of personal finance and start your financial journey."
          href="/content/student"
        />
        <UserTypeCard
          title="Employee"
          description="Discover how to manage your income, invest wisely, and plan for the future."
          href="/content/employee"
        />
        <UserTypeCard
          title="Retired"
          description="Explore strategies for managing retirement funds and maintaining financial stability."
          href="/content/retired"
        />
      </div>
    </div>
  )
}

function UserTypeCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block">
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-blue-600 font-semibold">Learn More &rarr;</span>
      </div>
    </Link>
  )
}

