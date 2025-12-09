"use client";
import ImageTrail from "./_components/ui/ImageTrail";

export default function HomePage() {
  return (
    <div className="relative h-screen ">
      
      {/* LAYER 1: IMAGE TRAIL AREA*/}
      <div
        className="absolute left-0 right-0 bottom-0 top-16 z-10 pointer-events-none"
      >
        <ImageTrail
          items={[
            "https://picsum.photos/id/287/300/300",
            "https://picsum.photos/id/1001/300/300",
            "https://picsum.photos/id/1025/300/300",
            "https://picsum.photos/id/1026/300/300",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1028/300/300",
            "https://picsum.photos/id/1029/300/300",
            "https://picsum.photos/id/1030/300/300",
          ]}
          variant={1}
        />
      </div>

      {/* LAYER 2: KONTEN*/}
      <div className="relative z-20 h-full w-full flex items-center justify-center pointer-events-none">
        <h1 className="text-black font-medium text-4xl md:text-8xl uppercase">
          DHAMMADHARASSA
        </h1>
      </div>

    </div>
  );
}
