// pages/index.js
import CardCarousel from "./layout/CardCarousel";

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-2">3D Card Animation</h1>
      <p className="text-gray-400 mb-8">Infinite animation with curve shape motion</p>
      
      <div className="w-full max-w-6xl">
        <CardCarousel />
      </div>
      
      <div className="mt-12 text-center text-gray-300">
        <p className="mb-4">Animation features:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-800 px-4 py-2 rounded-lg">3D Rotation</div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">Curve Motion</div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">Right to Left Flow</div>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">Infinite Loop</div>
        </div>
      </div>
    </div>
  );
}
