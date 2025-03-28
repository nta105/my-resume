export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">EDUCATION</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <h3 className="text-xl font-semibold">CALIFORNIA STATE UNIVERSITY, EAST BAY</h3>
            <p className="text-gray-500">Hayward, CA</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <p className="text-lg text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
            <p className="text-gray-500">Expected December 2025</p>
          </div>
          <div className="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium">GPA:</span> 3.94/4.0 | Deans List (Fall 2023, Spring 2024, Fall 2024)</p>
            <p><span className="font-medium">Achievement:</span> Recipient of CS Department Scholarship (2023-2024)</p>
            <p><span className="font-medium">Coursework:</span> Data Structures & Algorithms, Software Engineering, Discrete Structures, Operating Systems, Computer Architecture, Computer Networks</p>
            <p><span className="font-medium">Involvement:</span> Google Developer Student Club – Organized events and collaborated on technical projects.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 