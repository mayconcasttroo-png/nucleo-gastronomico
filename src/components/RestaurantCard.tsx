"use client";

import Link from 'next/link';
import Image from 'next/image';
import type { Restaurant } from '@/lib/restaurants';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant: r }: RestaurantCardProps) {
  return (
    <Link
      key={r.id}
      href={`/restaurant/${r.id}`}
      className="group flex flex-col text-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
    >
      <div className="relative h-40 w-full overflow-hidden rounded mb-3">
        <Image src={r.dishImage!} alt={r.dishName} fill className="object-cover" />
      </div>
      <div className="flex flex-col grow justify-between">
        <div className="text-center">
          <h3 className="font-bold text-lg text-gray-800">{r.name}</h3>
          <p className="text-sm text-gray-500">{r.description}</p>
          <p className="mt-2 text-sm text-gray-700 font-medium">Prato: {r.dishName}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const url = `https://www.google.com/maps/dir/?api=1&destination=${r.coords?.lat},${r.coords?.lng}`;
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-orange-600 transition"
            aria-label={`Abrir rotas para ${r.name} no Google Maps`}
          >
            Me leve até lá
          </button>
        </div>
      </div>
    </Link>
  );
}
