import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Icon name="Download" className="h-6 w-6 text-game-primary" />
          <span className="font-bold text-xl text-foreground">Торентт</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Главная
          </Link>
          <Link
            to="#features"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Особенности
          </Link>
          <Link
            to="#about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            О игре
          </Link>
          <Link
            to="#gallery"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Галерея
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground/80 hover:text-foreground"
          >
            <Icon name="LogIn" className="h-4 w-4 mr-2" />
            Войти
          </Button>
          <Button className="bg-game-primary hover:bg-game-primary/90">
            <Icon name="Download" className="h-4 w-4 mr-2" />
            Скачать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
