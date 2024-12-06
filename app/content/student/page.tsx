import ContentPage from '@/app/components/ContentPage'
import Chat from '@/app/components/Chat'

const studentContent = [
  {
    title: "Understanding Personal Finance",
    description: "Learn the basics of budgeting, saving, and managing your money.",
    lessons: [
      "Creating your first budget",
      "Setting financial goals",
      "Introduction to saving accounts",
    ],
  },
  {
    title: "Introduction to Investing",
    description: "Discover the fundamentals of investing and growing your wealth.",
    lessons: [
      "What are stocks and bonds?",
      "The power of compound interest",
      "Building a diversified portfolio",
    ],
  },
  {
    title: "Student Loans and Debt Management",
    description: "Navigate the world of student loans and learn how to manage debt effectively.",
    lessons: [
      "Understanding different types of student loans",
      "Strategies for repaying student debt",
      "Avoiding common debt pitfalls",
    ],
  },
]

export default function StudentContent() {
  return (
    <>
      <ContentPage
        title="FinTech Education for Young Students"
        description="Start your financial journey with these essential topics tailored for students."
        content={studentContent}
      />
      <Chat userType="student" />
    </>
  )
}

