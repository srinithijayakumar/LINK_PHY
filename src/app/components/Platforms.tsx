import { Globe, Smartphone, Monitor, Tablet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Platforms() {
  return (
<section
  id="platform"
  className="py-32 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 text-white relative overflow-hidden"
>      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Cross-Platform</span>
          <h2 className="text-5xl lg:text-5xl font-bold mt-4 mb-6">
            Everywhere You Are
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Seamless experience across all your devices. Start on your phone, continue on your laptop.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Platform Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Globe, title: 'Web Platform', desc: 'Full-featured desktop experience' },
              { icon: Smartphone, title: 'iOS & Android Apps', desc: 'Native mobile apps for on-the-go' },
              { icon: Tablet, title: 'Tablet Optimized', desc: 'Perfect for iPad and tablets' },
              { icon: Monitor, title: 'Cloud Sync', desc: 'Your data synced everywhere' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all group shadow-lg hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzM4MjQxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile app development"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>

       
        
      </div>
    </section>
  );
}