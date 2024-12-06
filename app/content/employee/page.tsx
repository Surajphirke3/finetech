import ContentPage from '@/app/components/ContentPage'
import Chat from '@/app/components/Chat'

const employeeContent = [
  {
    title: "Maximizing Your Income",
    description: "Learn strategies to make the most of your salary and benefits.",
    lessons: [
      "Understanding your paycheck and taxes",
      "Negotiating salary and benefits",
      "Side hustles and passive income streams",
    ],
  },
  {
    title: "Retirement Planning",
    description: "Start planning for your future with smart retirement strategies.",
    lessons: [
      "The leading india stock exchange ",
      "Calculating your retirement needs",
      "Balancing risk and reward in retirement accounts",
    ],
  },
  {
    title: "Advanced Investing Techniques",
    description: "Take your investing knowledge to the next level.",
    lessons: [
      "Value investing vs. growth investing",
      "Real estate investment trusts (REITs)",
      "Understanding options and derivatives",
    ],
  },
]

export default function EmployeeContent() {
  return (
    <>
      <ContentPage
        title="FinTech Education for Employees"
        description="Enhance your financial knowledge and make informed decisions about your money."
        content={employeeContent}
      />
      <Chat userType="employee" />
    </>
  )
}

