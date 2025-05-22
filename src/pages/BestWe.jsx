import { Headphones, MessageCircle, ShieldCheck, User } from 'lucide-react';
import React from 'react';

const BestWe = () => {
    
const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Verified Listings',
    description: 'Every listing is reviewed to ensure accuracy and safety.',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-600" />,
    title: 'Secure Communication',
    description: 'Chat safely with potential roommates without revealing personal info.',
  },
  {
    icon: <User className="w-8 h-8 text-purple-600" />,
    title: 'Match by Preferences',
    description: 'Smart matching based on lifestyle, habits, and budget.',
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
    title: '24/7 Support',
    description: 'Our team is always ready to help you resolve any issue.',
  },
];
    return (
        <section className="py-12 bg-[#F2F8FC]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">Discover what makes us the best platform for finding your perfect roommate.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default BestWe;