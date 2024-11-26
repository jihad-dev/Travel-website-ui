import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CategoryCard({ icon: Icon, title, description }: CategoryCardProps) {
  return (
    <div className="group flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1">
      <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}