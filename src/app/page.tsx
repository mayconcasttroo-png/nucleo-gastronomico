import { RESTAURANTS } from '@/lib/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-linear-to-br from-orange-50 to-blue-50 pt-20 pb-20">
      <main className="text-center max-w-4xl px-6">
        <Image src="/LOGO.png" alt="Núcleo Gastronômico" width={200} height={200} className="mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo ao Núcleo Gastronômico</h1>
        <p className="text-xl text-gray-600 mb-8">Avalie os melhores pratos da região e compartilhe suas experiências</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Restaurantes Participantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RESTAURANTS.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </main>
    </div>
  )
}
