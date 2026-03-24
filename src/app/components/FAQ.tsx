import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does ServiceHub ensure provider quality?',
      answer: 'We implement a rigorous verification process including email verification, phone verification, portfolio reviews, and continuous performance monitoring. All providers must maintain a minimum rating of 4.0 stars to remain active on the platform.'
    },
    {
      question: 'What fees does ServiceHub charge?',
      answer: 'ServiceHub charges a small service fee only when a project is successfully completed. For customers, the platform is free to use for posting requirements. Service providers pay a competitive 10-15% commission on completed projects, which is significantly lower than industry standards.'
    },
    {
      question: 'How do payments work?',
      answer: 'We offer secure escrow services to protect both parties. Customers can deposit funds into escrow when accepting a proposal, and the provider receives payment upon successful project completion. We support multiple payment methods including credit cards, bank transfers, and digital wallets.'
    },
    {
      question: 'Can I work with providers internationally?',
      answer: 'Absolutely! ServiceHub operates globally in over 150 countries. You can filter providers by location or choose to work with professionals anywhere in the world. Our platform supports multiple currencies and international payment methods.'
    },
    {
      question: 'What happens if I\'m not satisfied with the service?',
      answer: 'We offer comprehensive dispute resolution services. If issues arise, our support team mediates between both parties. Projects using escrow are protected, and refunds are available if service terms are not met. We also have a rating and review system to hold providers accountable.'
    },
    {
      question: 'How quickly can I find a service provider?',
      answer: 'Most requirements receive their first proposal within 2-4 hours. On average, you\'ll have 5-10 competitive bids within 24 hours. For urgent projects, you can mark your requirement as "Urgent" to attract faster responses from available providers.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-5xl lg:text-5xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ServiceHub
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-200 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`p-2 rounded-lg ${openIndex === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <ChevronDown
                        className={openIndex === index ? 'text-blue-600' : 'text-gray-600'}
                        size={24}
                      />
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-lg leading-relaxed pt-4 mt-4 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions?
          </p>
          <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors underline">
            Contact our support team →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
