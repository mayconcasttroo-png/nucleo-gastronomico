// src/lib/geo.ts
export function getDistanceFromLatLonInMeters(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Raio da terra km
  
  // Validar coordenadas
  if (!isValidCoordinates(lat1, lon1) || !isValidCoordinates(lat2, lon2)) {
    throw new Error("Coordenadas inválidas");
  }
  
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c) * 1000;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function isValidCoordinates(lat: number, lon: number): boolean {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}