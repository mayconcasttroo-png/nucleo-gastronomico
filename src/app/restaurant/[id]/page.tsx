// src/app/restaurant/[id]/page.tsx
import ReviewModal from '@/components/ReviewModal';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

import { getRestaurantById } from '@/lib/restaurants';


export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const restaurant = getRestaurantById(id);

  if (!restaurant) {
    return (
      <main className="max-w-md mx-auto min-h-screen bg-white pb-20 shadow-xl overflow-hidden p-6">
        <h2 className="text-xl font-bold">Restaurante não encontrado</h2>
        <p className="text-gray-600">Verifique o restaurante selecionado ou volte para a lista.</p>
      </main>
    );
  }

  const lat = restaurant.coords?.lat ?? 0;
  const lng = restaurant.coords?.lng ?? 0;

  return (
    <main className="max-w-md mx-auto min-h-screen bg-white pb-20 shadow-xl overflow-hidden">
      {/* 1. Imagem de Capa (Hero) */}
      <div className="relative h-72 w-full">
        {restaurant.dishImage ? (
          <Image src={restaurant.dishImage} alt={restaurant.dishName} fill className="object-cover" />
        ) : (
          <div className="bg-gray-200 h-full w-full" />
        )}
        {/* Gradiente para o texto ficar legível */}
        <div className="absolute bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full p-6 pt-20">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">PRATO PARTICIPANTE</span>
          <h1 className="text-white text-3xl font-bold leading-tight">{restaurant.dishName}</h1>
        </div>
      </div>

      <div className="p-6 -mt-4 bg-white rounded-t-3xl relative z-10">
        {/* 2. Informações do Restaurante */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{restaurant.name}</h2>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>{restaurant.address}</span>
          </div>
        </div>

        {/* 3. Descrição do prato */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{restaurant.description}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-8">{restaurant.dishDescription}</p>

        {/* 4. Botão Review */}
        <ReviewModal restaurantId={restaurant.id} restaurantLat={lat} restaurantLng={lng} />
      </div>
    </main>
  );
}