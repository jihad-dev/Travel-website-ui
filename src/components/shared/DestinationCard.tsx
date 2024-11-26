import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  description: string;
}

export default function DestinationCard({
  image,
  title,
  location,
  rating,
  price,
  description,
}: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="mt-3 text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}