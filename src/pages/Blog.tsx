import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Top 10 Hidden Gems in Southeast Asia',
    excerpt: 'Discover the lesser-known destinations that will take your breath away...',
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b',
    date: 'Mar 15, 2024',
    author: 'Sarah Johnson',
    category: 'Travel Tips',
  },
  {
    title: 'A Food Lover\'s Guide to Italian Cuisine',
    excerpt: 'Explore the rich flavors and traditions of authentic Italian cooking...',
    image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424',
    date: 'Mar 12, 2024',
    author: 'Michael Chen',
    category: 'Food & Culture',
  },
  {
    title: 'Sustainable Travel: Tips for Eco-Friendly Adventures',
    excerpt: 'Learn how to minimize your environmental impact while exploring the world...',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    date: 'Mar 10, 2024',
    author: 'Emily Rodriguez',
    category: 'Sustainability',
  },
];

export default function Blog() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Travel Blog"
            subtitle="Stories, tips, and guides from seasoned travelers"
          />

          {/* Featured Post */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Featured Post"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Featured</span>
                  <span className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Mar 20, 2024
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  The Ultimate Guide to Adventure Travel in 2024
                </h2>
                <p className="text-gray-200 mb-4">
                  From scaling mountains to diving deep seas, here's your complete guide to
                  planning the perfect adventure...
                </p>
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">{post.category}</span>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}