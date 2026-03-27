import { 
  Search, 
  MapPin, 
  DollarSign, 
  MessageCircle, 
  Bell, 
  Shield, 
  Star, 
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'AI-powered search to find exactly what you need, when you need it.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'Every provider is verified with detailed service history and credentials.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: DollarSign,
      title: 'Flexible Pricing',
      description: 'Choose fixed prices or receive competitive bids that fit your budget.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'Instant Chat',
      description: 'Real-time messaging with file sharing and instant notifications.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Star,
      title: 'Ratings & Reviews',
      description: 'Transparent reviews from real customers to help you decide.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: 'Location-Based',
      description: 'Find services and providers right in your neighborhood.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="pt-8 pb-20 via-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-5xl lg:text-5xl font-bold mt-4 mb-6">Everything You Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools and features designed to make finding and hiring service providers effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}en 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  <feature.icon size={28} className="text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-semibold text-sm">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}