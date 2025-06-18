import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "🎨",
      title: "Креативный дизайн",
      description:
        "Создаем яркие и современные интерфейсы, которые привлекают внимание и радуют глаз.",
    },
    {
      icon: "⚡",
      title: "Быстрая разработка",
      description:
        "Используем передовые технологии для создания быстрых и отзывчивых приложений.",
    },
    {
      icon: "🚀",
      title: "Готово к запуску",
      description:
        "Все проекты готовы к развертыванию и масштабированию с первого дня.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Что мы предлагаем
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
