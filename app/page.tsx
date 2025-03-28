import Header from '@/app/components/Header'
import Objective from '@/app/components/Objective'
import Education from '@/app/components/Education'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'
import SoftSkills from '@/app/components/SoftSkills'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-3 z-0" 
        style={{ backgroundImage: 'url("/background.avif")' }}
      ></div>
      
      <main className="max-w-4xl mx-auto shadow-lg relative z-10">
        <Header />
        <div className="px-8 py-12 bg-white dark:bg-gray-800">
          <Objective />
          <Education />
          <Projects />
          <Experience />
          <Skills />
          <SoftSkills />
        </div>
      </main>
    </div>
  )
}

