import ContentPage from '@/app/components/ContentPage'
import Chat from '@/app/components/Chat'

const retiredContent = [
  {
    title: "Managing Retirement Funds",
    description: "Learn how to effectively manage your retirement savings.",
    lessons: [
      "Creating a sustainable withdrawal strategy",
      "Rebalancing your portfolio in retirement",
      "Understanding required minimum distributions (RMDs)",
    ],
  },
  {
    title: "Estate Planning and Legacy",
    description: "Plan for the future and leave a lasting legacy.",
    lessons: [
      "Creating a comprehensive estate plan",
      "Understanding trusts and their benefits",
      "Charitable giving strategies",
    ],
  },
  {
    title: "Healthcare and Long-term Care Planning",
    description: "Prepare for healthcare costs and long-term care needs.",
    lessons: [
      "Medicare and supplemental insurance options",
      "Long-term care insurance considerations",
      "Health savings accounts (HSAs) in retirement",
    ],
  },
]

export default function RetiredContent() {
  return (
    <>
      <ContentPage
        title="FinTech Education for Retirees"
        description="Maximize your retirement savings and maintain financial stability throughout your golden years."
        content={retiredContent}
      />
      <Chat userType="retired" />
    </>
  )
}

