interface Lesson {
  title: string;
  description: string;
  lessons: string[];
}

interface ContentPageProps {
  title: string;
  description: string;
  content: Lesson[];
}

export default function ContentPage({ title, description, content }: ContentPageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">{description}</p>
      <div className="space-y-8">
        {content.map((lesson, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{lesson.title}</h2>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <h3 className="text-lg font-semibold mb-2">Lessons:</h3>
            <ul className="list-disc list-inside space-y-2">
              {lesson.lessons.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

