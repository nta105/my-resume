export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 sm:p-12 rounded-t-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thien An Nguyen</h1>
        
        {/* Mobile-friendly contact info */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-blue-100">
          <span>San Jose, CA</span>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+6577228927" className="hover:text-white transition-colors">
            P: +657 722-8927
          </a>
          <span className="hidden sm:inline">|</span>
          <a 
            href="mailto:tnguyen554@horizon.csueastbay.edu" 
            className="hover:text-white transition-colors break-all"
          >
            tnguyen554@horizon.csueastbay.edu
          </a>
          <span className="hidden sm:inline">|</span>
          <a 
            href="https://github.com/nta105" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            github.com/nta105
          </a>
        </div>
      </div>
    </header>
  )
} 