import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-game-dark py-12 text-white/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Download" className="h-6 w-6 text-game-primary" />
              <span className="font-bold text-xl text-white">Торентт</span>
            </div>
            <p className="mb-4">
              Ваш портал в мир захватывающих игровых приключений.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name="Discord" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Игры</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Популярные
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Скоро выйдут
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Рекомендуемые
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Все игры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Справочный центр
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Системные требования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Проблемы со скачиванием
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сообщить о проблеме
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">О нас</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Для прессы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Партнерам
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 GamePortal. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
