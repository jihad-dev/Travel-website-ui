import React, { useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import DestinationCard from '../components/shared/DestinationCard';
import { Sliders } from 'lucide-react';

const destinations = [
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
  {
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017',
    title: 'Amsterdam',
    location: 'Netherlands',
    rating: 4.6,
    price: 999,
    description: 'Navigate picturesque canals and experience Dutch culture at its finest.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
    title: 'Santorini',
    location: 'Greece',
    rating: 4.9,
    price: 1599,
    description: 'Witness breathtaking sunsets and iconic white architecture.',
  },
  {
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
    title: 'Machu Picchu',
    location: 'Peru',
    rating: 4.8,
    price: 1799,
    description: 'Explore ancient Incan ruins in the heart of the Andes.',
  },
];

export default function Destinations() {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Explore Destinations"
            subtitle="Find your perfect destination from our curated collection"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Sliders className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-medium mb-2">Rating</h4>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 mb-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span>{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations
                .filter((dest) => dest.price <= priceRange[1])
                .map((destination) => (
                  <DestinationCard key={destination.title} {...destination} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}