export default function Home() {
  const cards = [
    {
      title: "Chat AI: Fast Replies",
      description:
        "Our Chat AI instantly replies to your queries. It uses Gemini API to provide fast, accurate, and interactive answers. " +
        "Designed for personal learning or experimentation, the interface ensures smooth conversation flow. " +
        "You can ask questions anytime and get smart AI responses in real-time.",
      color: "white",
      img: "https://images.pexels.com/photos/30530422/pexels-photo-30530422.jpeg",
    },
    {
      title: "Education: Learn & Explore",
      description:
        "Use UK Chatbox for educational purposes. Ask questions, explore topics, or practice learning with AI-powered assistance. " +
        "It’s perfect for students, educators, or anyone curious about technology and AI.",
      color: "white",
      img: "https://images.pexels.com/photos/13904064/pexels-photo-13904064.jpeg",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-white text-gray-900 min-h-screen">

      {/* Page Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12"> Welcome to Home Page</h2>

      {/* Responsive Cards */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl cursor-pointer flex flex-col md:flex-row items-center gap-6`}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
            />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
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
