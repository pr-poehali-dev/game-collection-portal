
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="bg-background/50 backdrop-blur-sm border border-border/50 hover:border-game-primary/50 transition-all hover:shadow-md duration-300 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="rounded-full w-12 h-12 bg-game-primary/10 flex items-center justify-center mb-4">
        <Icon name={icon} className="h-6 w-6 text-game-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const GameDescription = () => {
  return (
    <div className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Испытайте невероятный игровой процесс</h2>
          <p className="text-lg text-muted-foreground">
            Наша игра предлагает уникальные возможности и инновационные геймплейные механики, 
            которые подарят вам незабываемые впечатления.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon="Swords"
            title="Динамичные бои"
            description="Сражайтесь с многочисленными противниками, используя комбинации ударов и специальные приемы."
          />
          <FeatureCard 
            icon="Map"
            title="Открытый мир"
            description="Исследуйте обширные локации, полные тайн, сокровищ и опасностей."
          />
          <FeatureCard 
            icon="Trophy"
            title="Система достижений"
            description="Выполняйте задания и собирайте награды, повышая свой уровень мастерства."
          />
          <FeatureCard 
            icon="Users"
            title="Многопользовательский режим"
            description="Соревнуйтесь с другими игроками или объединяйтесь для совместного прохождения."
          />
          <FeatureCard 
            icon="PaintBucket"
            title="Настройка персонажа"
            description="Создайте уникального героя, меняя его внешность и характеристики."
          />
          <FeatureCard 
            icon="Sparkles"
            title="Визуальные эффекты"
            description="Наслаждайтесь потрясающей графикой и реалистичной физикой игрового мира."
          />
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Игровой процесс" 
              className="rounded-xl w-full shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Захватывающий сюжет</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              Погрузитесь в эпическую историю о приключениях героя в мире, находящемся на грани исчезновения. 
              Вам предстоит раскрыть древние секреты, сразиться с могущественными противниками и спасти мир от надвигающейся катастрофы.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Каждое решение имеет значение, а каждый выбор влияет на развитие сюжета, 
              что делает каждое прохождение уникальным и неповторимым.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-game-primary">100+</span>
                <span className="text-sm text-muted-foreground">Часов геймплея</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-game-primary">50+</span>
                <span className="text-sm text-muted-foreground">Уникальных локаций</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-game-primary">200+</span>
                <span className="text-sm text-muted-foreground">Видов оружия</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-game-primary">30+</span>
                <span className="text-sm text-muted-foreground">Типов противников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
