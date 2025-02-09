import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Dr. Rohit Sharma',
    text: 'The platform revolutionized how we manage and deliver courses. It has truly made my teaching experience more efficient.',
    rating: 5,
  },
  {
    name: 'Mahesh Babu',
    text: 'As an instructor, I love the seamless integration of course scheduling and grading features. It saves me a lot of time and effort for planning my courses.',
    rating: 4,
  },
  {
    name: 'SS Rajamouli',
    text: 'The AI-powered recommendations for students and the interactive tools make this platform a must-have for any educational institution.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-[#0A0F1C]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white/[0.05] border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/[0.08] shadow-lg shadow-indigo-500/10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 drop-shadow-md" />
                ))}
              </div>
              <p className="text-white/80 mb-4 text-lg italic">"{review.text}"</p>
              <h3 className="text-lg font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                - {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
