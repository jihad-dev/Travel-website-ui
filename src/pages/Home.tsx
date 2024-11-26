import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/shared/SectionTitle';
import CategoryCard from '../components/shared/CategoryCard';
import DestinationCard from '../components/shared/DestinationCard';
import { Compass, Mountain, Umbrella, Map, Camera } from 'lucide-react';

const categories = [
  {
    icon: Compass,
    title: 'Adventure',
    description: 'Thrilling experiences for the bold explorer',
  },
  {
    icon: Umbrella,
    title: 'Beach Escapes',
    description: 'Relax on pristine beaches worldwide',
  },
  {
    icon: Mountain,
    title: 'Mountain Trips',
    description: 'Conquer peaks and breathtaking views',
  },
  {
    icon: Camera,
    title: 'Photo Tours',
    description: 'Capture moments worth remembering',
  },
  {
    icon: Map,
    title: 'Road Trips',
    description: 'Journey through scenic routes',
  },
];

const featuredDestinations = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    title: 'Tokyo',
    location: 'Japan',
    rating: 4.8,
    price: 1299,
    description: "Experience the perfect blend of tradition and modernity in Japan's vibrant capital.",
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
    title: 'Paris',
    location: 'France',
    rating: 4.9,
    price: 1499,
    description: 'Discover the city of love, art, and unparalleled culinary experiences.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    title: 'Bali',
    location: 'Indonesia',
    rating: 4.7,
    price: 899,
    description: 'Explore tropical paradise with stunning beaches and rich cultural heritage.',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Explore by Category"
            subtitle="Find your perfect trip by exploring our curated categories"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Destinations"
            subtitle="Discover our hand-picked destinations for your next adventure"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}