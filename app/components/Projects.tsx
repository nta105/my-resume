export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="border-l-4 border-blue-500 pl-4 space-y-8">
        <div>
          <h3 className="text-xl font-semibold">MY RESUME WEBSITE</h3>
          <p className="text-gray-500">Next.js, Tailwind CSS, Vercel • 2024  (<a href="https://my-resume-two-alpha.vercel.app/" className="text-blue-500 hover:underline">https://my-resume-two-alpha.vercel.app/</a>)</p>
          <div className="mt-2 space-y-2">
            <p>• Designed and deployed a responsive online resume to showcase professional experience.</p>
            <p>• Hosted on Vercel for seamless accessibility.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">BIO ABOUT MY SIDE JOB</h3>
          <p className="text-gray-500">HTML, CSS, JavaScript, Github Pages • 2024 (<a href="https://nta105.github.io/" className="text-blue-500 hover:underline">https://nta105.github.io/</a>)</p>
          <div className="mt-2 space-y-2">
            <p>• Created a personal website highlighting guitar lessons and performances.</p>
            <p>• Deployed using GitHub Pages.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">YOUTUBE TRANSCRIPT ANALYSER </h3>
          <p className="text-gray-500">Next.js, Tailwind CSS, Firebase, Vercel • Fall 2024 (<a href="https://youtube-transcript-analyser.vercel.app/" className="text-blue-500 hover:underline">https://youtube-transcript-analyser.vercel.app/</a>)</p>
          <div className="mt-2 space-y-2">
            <p>• Built a web application that allows users to input a YouTube link and receive AI-generated analysis of the video content.</p>
            <p>• Integrated an AI-powered chatbot that enables users to ask questions about the video's content.</p>
            <p>• Implemented user authentication with Firebase, allowing users to save, edit, update, and delete their analyses.</p>
            <p>• Designed a responsive and intuitive UI using Tailwind CSS and deployed the platform on Vercel for seamless access.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">CLICKER GAME</h3>
          <p className="text-gray-500">Java, Android Studio, Firebase • Spring 2024</p>
          <div className="mt-2 space-y-2">
            <p>• Developed an interactive Android clicker game with Firebase integration for secure user authentication and data storage.</p>
            <p>• Designed an engaging UI with customized icons and smooth gameplay to enhance user experience.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">TASK MANAGEMENT APPLICATION</h3>
          <p className="text-gray-500">Python, Tkinter • Fall 2023</p>
          <div className="mt-2 space-y-2">
            <p>• Built a desktop application for task organization with an intuitive Graphical User Interface (GUI).</p>
            <p>• Implemented CRUD operations (Create, Read, Update, Delete) for task management.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 