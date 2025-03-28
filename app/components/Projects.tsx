export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">PROJECTS</h2>
      <div className="border-l-4 border-blue-500 pl-4 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">PERSONAL PROJECTS</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium">AI-Powered Video Content Analyser</h4>
            <p className="text-gray-500 mb-2">
              <a href="https://youtube-content-analyser.vercel.app/" className="text-blue-500 hover:underline">
              https://chat-with-youtubevideo.vercel.app/
              </a>
            </p>
            <div className="mt-2 space-y-2">
              <p>• Built a web application that allows users to input a YouTube link and receive AI-generated analysis of the video content.</p>
              <p>• Integrated an AI-powered chatbot that enables users to ask questions about the videos content.</p>
              <p>• Implemented user authentication with Firebase, allowing users to save, edit, update, and delete their analyses.</p>
              <p>• Designed a responsive and intuitive UI using Tailwind CSS and deployed the platform on Vercel for seamless access.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium">My Resume Website</h4>
            <p className="text-gray-500 mb-2">
              <a href="https://thienan.vercel.app/" className="text-blue-500 hover:underline">
                https://thienan.vercel.app/
              </a>
            </p>
            <div className="mt-2 space-y-2">
              <p>• Designed and deployed a responsive online resume to showcase professional experience.</p>
              <p>• Hosted on Vercel for seamless accessibility.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium">Guitar Teaching & Performance Website</h4>
            <p className="text-gray-500 mb-2">
              <a href="https://nta105.github.io/" className="text-blue-500 hover:underline">
                https://nta105.github.io/
              </a>
            </p>
            <div className="mt-2 space-y-2">
              <p>• Created a personal website highlighting guitar lessons and performances.</p>
              <p>• Deployed using GitHub Pages.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">UNIVERSITY PROJECTS</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium">Interactive Android Clicker Game</h4>
            <p className="text-gray-500">Spring 2024</p>
            <div className="mt-2 space-y-2">
              <p>• Developed an interactive Android clicker game with Firebase integration for secure user authentication and data storage.</p>
              <p>• Designed an engaging UI with customized icons and smooth gameplay to enhance user experience.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium">Task Manager</h4>
            <p className="text-gray-500">Fall 2023</p>
            <div className="mt-2 space-y-2">
              <p>• Built a desktop application for task organization with an intuitive Graphical User Interface (GUI).</p>
              <p>• Implemented CRUD operations (Create, Read, Update, Delete) for task management.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 