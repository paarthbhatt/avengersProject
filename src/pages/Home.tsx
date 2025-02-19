import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const heroes = [
  {
    name: "Captain America",
    image: "/img/1.jpg",
    description: "The First Avenger, wielding his iconic shield with unwavering courage.",
    path: "/captain-america",
    color: "from-blue-600/20 to-red-600/20"
  },
  {
    name: "Iron Man",
    image: "/img/2.jpg",
    description: "Genius billionaire Tony Stark in his cutting-edge powered armor.",
    path: "/iron-man",
    color: "from-yellow-600/20 to-red-600/20"
  },
  {
    name: "Thor",
    image: "/img/3.jpg",
    description: "The God of Thunder, wielding the mighty Mjolnir.",
    path: "/thor",
    color: "from-blue-400/20 to-yellow-400/20"
  },
  {
    name: "Black Widow",
    image: "/img/4.jpg",
    description: "Master spy and expert combatant with deadly precision.",
    path: "/black-widow",
    color: "from-red-600/20 to-black/20"
  },
  {
    name: "Hulk",
    image: "/img/6.jpg",
    description: "The strongest Avenger, fueled by rage and gamma radiation.",
    path: "/hulk",
    color: "from-green-600/20 to-green-800/20"
  },
  {
    name: "Hawkeye",
    image: "/img/5.jpg",
    description: "Master archer with perfect accuracy and tactical expertise.",
    path: "/hawkeye",
    color: "from-purple-600/20 to-black/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div className="parallax-container">
      <div className="parallax-layer parallax-back">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-red-900/50" />
      </div>
      
      <div className="parallax-layer parallax-base">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-7xl font-bold text-white mb-8 hero-glow">
            Earth's Mightiest Heroes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When the world is at its darkest, they assemble to fight the battles 
            that no single hero could face alone. Together, they are Earth's last 
            line of defense against threats both terrestrial and cosmic.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        >
          {heroes.map((hero) => (
            <motion.div
              key={hero.name}
              variants={item}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={hero.path}
                className="block group relative overflow-hidden rounded-lg aspect-[4/3] futuristic-border"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${hero.color} opacity-80 mix-blend-multiply`} />
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-x-2 hero-glow">
                    {hero.name}
                  </h2>
                  <p className="text-gray-300 transform transition-transform duration-300 group-hover:translate-x-2">
                    {hero.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}