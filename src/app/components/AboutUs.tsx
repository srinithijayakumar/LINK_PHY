import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect talented professionals with businesses worldwide, creating opportunities for growth and success.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of experts passionate about building bridges between service providers and clients.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Trust, quality, and transparency guide everything we do. We believe in fair opportunities for all.'
    },
    {
      icon: Zap,
      title: 'Our Vision',
      description: 'To become the world\'s most trusted platform for professional services and freelance work.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">About ServiceHub</span>
          <h2 className="text-5xl lg:text-5xl font-bold mt-4 mb-6">
            Building the Future of Work
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ServiceHub was founded with a simple belief: great work happens when talented people 
            connect with the right opportunities. We're more than just a platform – we're a community 
            dedicated to empowering professionals and businesses to achieve their goals together.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Started in 2020 by a team of entrepreneurs who experienced firsthand the challenges 
              of finding reliable service providers, ServiceHub was born from necessity. We saw 
              talented professionals struggling to find quality clients, and businesses frustrated 
              with unreliable service providers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we've grown into a global platform that serves thousands of professionals 
              and businesses across 150+ countries. Our success is measured not just in numbers, 
              but in the success stories of our community members.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2020</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Why Choose ServiceHub?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Verified professionals only</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Secure payment protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Global reach, local expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Fair and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 blur-xl opacity-50 rounded-full group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={32} strokeWidth={2} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}