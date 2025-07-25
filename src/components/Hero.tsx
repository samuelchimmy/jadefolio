import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/E1VcB6m5N0mydlaW/scene.splinecode" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">ViralWarp</h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          Engage, Earn, and Grow with Warpcast-powered virality.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
          Launch App
        </button>
      </div>
    </section>
  );
}
