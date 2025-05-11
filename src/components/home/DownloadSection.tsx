import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";

const DownloadSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setProgress(0);

    toast({
      title: "Загрузка началась",
      description: "Файл игры готовится к скачиванию",
    });

    // Имитация прогресса загрузки
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            toast({
              title: "Загрузка завершена",
              description:
                "Спасибо за скачивание! Установите игру и приступайте к приключениям.",
            });
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  return (
    <div className="py-16 md:py-24 bg-game-dark" id="download">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать приключение?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Скачайте игру прямо сейчас с Торентт и погрузитесь в захватывающий
            мир приключений, сражений и открытий. Присоединяйтесь к тысячам
            игроков по всему миру!
          </p>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-14 h-14 bg-game-primary/20 flex items-center justify-center">
                  <Icon
                    name="GameController"
                    className="h-7 w-7 text-game-primary"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    Игра "Звездный Странник"
                  </h3>
                  <p className="text-white/70">Версия 1.2.5 | 3.5 GB</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Icon name="Shield" className="h-4 w-4" />
                <span>Без вирусов</span>
                <span className="mx-2">•</span>
                <Icon name="Check" className="h-4 w-4" />
                <span>Проверено</span>
              </div>
            </div>

            {isDownloading ? (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>Скачивание...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleDownload}
                disabled={isDownloading}
                className={`${isDownloading ? "bg-game-primary/70" : "bg-game-primary animate-pulse-glow"} px-8 font-medium text-lg`}
              >
                {isDownloading ? (
                  <>
                    <Icon
                      name="Loader2"
                      className="h-5 w-5 mr-2 animate-spin"
                    />
                    Загрузка...
                  </>
                ) : (
                  <>
                    <Icon name="Download" className="h-5 w-5 mr-2" />
                    Скачать для Windows
                  </>
                )}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Icon name="Apple" className="h-5 w-5 mr-2" />
                Скачать для Mac
              </Button>
            </div>

            <div className="mt-6 flex justify-center gap-8 text-white/50 text-sm">
              <a href="#" className="hover:text-white flex items-center gap-1">
                <Icon name="FileText" className="h-4 w-4" />
                Системные требования
              </a>
              <a href="#" className="hover:text-white flex items-center gap-1">
                <Icon name="HelpCircle" className="h-4 w-4" />
                Помощь с установкой
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-8">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center"
            >
              <Icon name="Steam" className="h-8 w-8 mb-2" />
              <span>Steam</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center"
            >
              <Icon name="Globe" className="h-8 w-8 mb-2" />
              <span>Epic Games</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center"
            >
              <Icon name="Gamepad2" className="h-8 w-8 mb-2" />
              <span>Xbox</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center"
            >
              <Icon name="Playstation" className="h-8 w-8 mb-2" />
              <span>PlayStation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
