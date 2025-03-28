export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">SKILLS</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <div className="mb-4 grid grid-cols-1 gap-4">
          <div>
            <p className="font-semibold mb-2">Programming Languages:</p>
            <p className="text-gray-700 dark:text-gray-300">Java, Python, C++, C, HTML/CSS, JavaScript, SQL, Typescript, Kotlin</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Frameworks & Technologies:</p>
            <p className="text-gray-700 dark:text-gray-300">Git, GitHub, Next.js, Firebase, Tailwind CSS, Tkinter, Vercel, Supabase</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 