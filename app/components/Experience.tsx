export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">WORK EXPERIENCE</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <h3 className="text-xl font-semibold">INTUITIVE SURGICAL</h3>
            <p className="text-gray-500">Sunnyvale, CA</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <p className="text-lg text-gray-600 dark:text-gray-300">Technician</p>
            <p className="text-gray-500">July 2022 – July 2023</p>
          </div>
          <div className="mt-4 space-y-2">
            <p>• Assembled precision robotic components for the Da Vinci surgical system and Ion robotic platform, ensuring 100% compliance with quality and safety standards.</p>
            <p>• Conducted functional tests on 20+ devices per week, identifying defects early and reducing rework time by 15%.</p>
            <p>• Improved manufacturing procedure instructions by collaborating with software engineers, leading to a 10% reduction in assembly errors.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 