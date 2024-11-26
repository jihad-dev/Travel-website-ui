import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Your Next
          <span className="block text-5xl md:text-7xl mt-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Adventure
          </span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Explore the world's most beautiful destinations and create unforgettable memories
        </p>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="When?"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {['Bali', 'Paris', 'Tokyo', 'New York', 'Rome'].map((city) => (
              <button
                key={city}
                className="px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}