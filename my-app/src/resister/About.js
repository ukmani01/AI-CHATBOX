export default function About() {
  const cards = [
    {
      title: "What is UK CHATBOX?",
      description:
        "I created this using the Gemini API. This is a personal project where I wanted to implement a platform similar to a large storage system like MongoDB. Since that is not currently available, I built this for educational purposes. The backend uses the Gemini API to generate responses, which are then displayed on the frontend.",
      color: "white",
    },
    {
      title: "Why Use It?",
      description:
        "This is similar to ChatGPT. You can ask educational questions here, and it will provide answers. It demonstrates how AI APIs can be integrated to provide interactive learning and assistance.",
      color: "white",
    },
    {
      title: "AI Integration",
      description:
        "Seamlessly integrates AI APIs to provide real-time answers and interactive chat experiences for learning and experimentation.",
      color: "white",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-white text-gray-900 min-h-screen">

      {/* Page Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12">About UK CHATBOX</h2>

      {/* Cards Grid (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="relative group">
            <div className={`bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl cursor-pointer`}>
              
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{card.description}</p>

              {/* Floating decorative elements */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-3xl animate-pulse bg-${card.color}-500/30 pointer-events-none`}></div>
              <div className={`absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-3xl animate-pulse bg-${card.color}-500/20 pointer-events-none`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links - Footer */}
      <div className="mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-300 flex flex-col items-center space-y-3 sm:space-y-4 bg-white rounded-xl shadow-inner">
        <p className="text-gray-600 text-sm sm:text-base">Need help or want to connect? Reach out:</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://www.instagram.com/the_life_of_kabaddi" target="_blank" className="text-pink-500 font-semibold hover:text-pink-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/in/u-k-manikandan724630375" target="_blank" className="text-blue-500 font-semibold hover:text-blue-400 transition">LinkedIn</a>
          <span className="text-blue-700 font-semibold">Facebook: ukmani</span>
        </div>
      </div>

    </div>
  );
}
