import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Services.css';
import Modal from './Modal';

const cyberserviceData = [
  {
    title: "Web Development",
    description: "Create stunning, responsive websites tailored to your brand.",
    image: "/api/placeholder/600/400",
    icon: "🌐"
  },
  {
    title: "Mobile App Development",
    description: "Build powerful, user-friendly mobile applications for iOS and Android.",
    image: "/api/placeholder/600/400",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive and visually appealing user interfaces and experiences.",
    image: "/api/placeholder/600/400",
    icon: "🎨"
  },
  {
    title: "Cloud Solutions",
    description: "Implement scalable and secure cloud infrastructure for your business.",
    image: "/api/placeholder/600/400",
    icon: "☁️"
  }
];

const aiserviceData = [
    {
      title: "Web Development",
      description: "Create stunning, responsive websites tailored to your brand.",
      image: "/api/placeholder/600/400",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Build powerful, user-friendly mobile applications for iOS and Android.",
      image: "/api/placeholder/600/400",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and visually appealing user interfaces and experiences.",
      image: "/api/placeholder/600/400",
      icon: "🎨"
    },
    {
      title: "Cloud Solutions",
      description: "Implement scalable and secure cloud infrastructure for your business.",
      image: "/api/placeholder/600/400",
      icon: "☁️"
    }
  ];

  const ServiceCard = ({ title, description, image, icon, onLearnMore }) => (
    <motion.div 
      className="service-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="service-icon">{icon}</div>
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <motion.button 
        className="learn-more-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onLearnMore}
      >
        Learn More <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
  

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
      };

  return (
    <div className="services-container">
      <motion.h1 
        className="services-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.p 
        className="services-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our services related to cyber security
      </motion.p>
      <div className="services-grid">
        {cyberserviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} 
            onLearnMore={() => openModal(service)} />
          </motion.div>
        ))}
      </div>

      <motion.p 
        className="services-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our services related to AI and ML
      </motion.p>
      <div className="services-grid">
        {aiserviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard 
              {...service} 
              onLearnMore={() => openModal(service)} 
            />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="cta-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Ready to elevate your business?</h2>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        service={selectedService} 
      />
    </div>
  );
};

export default Services;