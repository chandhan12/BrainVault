
import { Brain } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 text-center lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Brain className="w-16 h-16 mx-auto text-indigo-600 mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
            Your Digital Brain for
            <span className="text-indigo-600"> Everything Important</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Store, organize, and access all your important links, tweets, and documents in one place.
            Never lose valuable information again.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-lg font-semibold">
              Start For Free
            </button>
            <button className="px-8 py-4 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-gray-300 hover:text-gray-900 text-lg font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}