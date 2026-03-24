import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl">
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">ServiceHub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              The world's leading marketplace connecting customers with verified service providers across all . Find, compare, and hire with confidence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all hover:scale-110 group`}
                >
                  <social.icon size={20} className="group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press Kit', 'Blog', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Help Center', 'Community', 'Guides', 'API Docs', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer', 'Licenses'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 ServiceHub. All rights reserved. 
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
            Built with ❤️ for service professionals worldwide.
            </div>
          </div>
          
          {/* App Stores */}
      
        </div>
      </div>
    </footer>
  );
}