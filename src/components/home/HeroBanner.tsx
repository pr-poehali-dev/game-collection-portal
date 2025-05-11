import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-game-dark to-game-dark/90">
      {/* Визуальный элемент дизайна - блестящие точки */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 h-2 w-2 rounded-full bg-game-secondary opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-game-accent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-game-primary opacity-30 animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/5 h-2 w-2 rounded-full bg-game-secondary opacity-25 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg">
              Торентт - <span className="text-gradient">быстрый</span> и удобный
              способ скачать игры
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Погрузитесь в захватывающий экшен, невероятные приключения и
              сражения с уникальными противниками в новых играх.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-game-primary hover:bg-game-primary/90 text-white font-medium text-lg animate-pulse-glow"
              >
                <Icon name="Download" className="h-5 w-5 mr-2" />
                Скачать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Icon name="PlayCircle" className="h-5 w-5 mr-2" />
                Смотреть трейлер
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center">
                <Icon name="HardDrive" className="h-4 w-4 mr-1" />
                <span>3.5 GB</span>
              </div>
              <div className="flex items-center">
                <Icon name="Shield" className="h-4 w-4 mr-1" />
                <span>Безопасная загрузка</span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="h-4 w-4 mr-1" />
                <span>1M+ загрузок</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="rounded-xl overflow-hidden border-2 border-game-primary/30 shadow-[0_0_25px_rgba(139,92,246,0.2)] animate-float">
              <img
                src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Игровой скриншот"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
