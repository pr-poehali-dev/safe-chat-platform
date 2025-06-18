const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400">
      <div className="text-center text-white px-4">
        <div className="mb-8 animate-bounce">
          <span className="text-8xl">🎯</span>
        </div>
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">
          Добро пожаловать!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Создаем что-то удивительное вместе. Современные технологии, яркий
          дизайн и безграничные возможности.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
          Начать путешествие ✨
        </button>
      </div>
    </section>
  );
};

export default Hero;
