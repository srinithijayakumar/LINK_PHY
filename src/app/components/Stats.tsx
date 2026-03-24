import { motion } from 'motion/react';
import { Briefcase, Globe, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: '/src/assets/users.jpg',
      value: '50,000+',
      label: 'Active Users',
      color: 'from-orange-500 to-red-500',
      isImage: true
    },
    {
      icon: '/src/assets/project.jpg',
      value: '100,000+',
      label: 'Projects Completed',
      color: 'from-red-500 to-pink-500',
      isImage: true
    },
    {
      icon: '/src/assets/countries.jpg',
      value: '150+',
      label: 'Countries Served',
      color: 'from-orange-600 to-red-600',
      isImage: true
    },
    {
      icon: '/src/assets/arrow.jpg',
      value: '50M+',
      label: 'Total Transactions',
      color: 'from-red-600 to-pink-600',
      isImage: true
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(234, 88, 12, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(234, 88, 12, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                {/* Gradient Background */}
                <div className={`absolute inset-0  blur-xl opacity-50 rounded-full group-hover:opacity-75 transition-opacity`}></div>
                {/* Icon Container */}
                <div className={`relative group-hover:scale-110 transition-transform`}>
                  {stat.isImage ? (
                    <img 
                      src={stat.icon} 
                      alt={stat.label}
                      className="w-25 h-25 object-cover rounded-lg"
                    />
                  ) : (
                    <stat.icon className="text-white" size={40} strokeWidth={2} />
                  )}
                </div>
              </div>
              <motion.h3 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600 text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}