import { Features } from "../components/Features";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";


const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Features />
     
            <section className="bg-indigo-600 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Start Organizing Your Digital Life Today
                </h2>
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 text-lg font-semibold">
                  Get Started for Free
                </button>
              </div>
            </section>
          </main>
    
    
        </div>
      );
}

export default HomePage
