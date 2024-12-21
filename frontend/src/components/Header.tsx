
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">BrainVault</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Login</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}