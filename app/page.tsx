import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white">
            RAG Chat
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Ask questions about your documents using{" "}
            <span className="font-medium">Retrieval-Augmented Generation</span>
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6 text-gray-600 dark:text-gray-400">
          <p className="text-base leading-relaxed">
            This application combines the power of vector search with AI to provide 
            accurate, source-backed answers to your questions.
          </p>
          
          <div className="grid gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Semantic document search with Vectorize.io</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI-powered responses with GPT-4o-mini</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Transparent source attribution</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/vectorize"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Start Asking Questions
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs text-gray-400 dark:text-gray-600">
          Built for the Agent Engineering Bootcamp
        </div>
      </div>
    </div>
  );
}
