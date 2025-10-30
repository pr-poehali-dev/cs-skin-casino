import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface SkinItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface CaseBox {
  id: number;
  name: string;
  price: number;
  color: string;
  items: string[];
}

interface ChatMessage {
  id: number;
  user: string;
  avatar: string;
  message: string;
  time: string;
}

const mockSkins: SkinItem[] = [
  { id: 1, name: 'AK-47 | Redline', image: '/placeholder.svg', price: 45.50, rarity: 'epic' },
  { id: 2, name: 'AWP | Dragon Lore', image: '/placeholder.svg', price: 1850.00, rarity: 'legendary' },
  { id: 3, name: 'M4A4 | Howl', image: '/placeholder.svg', price: 3200.00, rarity: 'legendary' },
  { id: 4, name: 'Glock-18 | Fade', image: '/placeholder.svg', price: 275.00, rarity: 'epic' },
  { id: 5, name: 'Karambit | Fade', image: '/placeholder.svg', price: 1250.00, rarity: 'legendary' },
  { id: 6, name: 'Desert Eagle | Blaze', image: '/placeholder.svg', price: 420.00, rarity: 'rare' },
];

const caseBoxes: CaseBox[] = [
  { id: 1, name: 'Стартовый кейс', price: 39, color: 'from-blue-600 to-cyan-500', items: ['AK-47 | Redline', 'Glock-18', 'USP-S'] },
  { id: 2, name: 'Классический кейс', price: 99, color: 'from-purple-600 to-pink-500', items: ['AWP | Neo-Noir', 'M4A4', 'Desert Eagle'] },
  { id: 3, name: 'Премиум кейс', price: 299, color: 'from-orange-600 to-yellow-500', items: ['Karambit', 'AK-47 | Vulcan', 'AWP | Asiimov'] },
  { id: 4, name: 'Элитный кейс', price: 599, color: 'from-red-600 to-pink-600', items: ['Butterfly Knife', 'M4A4 | Howl', 'AWP | Dragon Lore'] },
  { id: 5, name: 'Легендарный кейс', price: 1499, color: 'from-purple-700 to-indigo-600', items: ['Karambit | Fade', 'AK-47 | Fire Serpent', 'Sport Gloves'] },
  { id: 6, name: 'Мифический кейс', price: 2999, color: 'from-yellow-600 to-orange-600', items: ['Butterfly | Doppler', 'AWP | Medusa', 'Driver Gloves'] },
  { id: 7, name: 'Божественный кейс', price: 5999, color: 'from-gold to-yellow-500', items: ['Karambit | Crimson Web', 'M4A4 | Poseidon', 'Specialist Gloves'] },
  { id: 8, name: 'АГРО кейс', price: 10000, color: 'from-gold via-yellow-400 to-gold', items: ['Все легендарные скины', 'Редчайшие ножи', 'Эксклюзивные перчатки'] },
];

const mockMessages: ChatMessage[] = [
  { id: 1, user: 'ProGamer', avatar: '/placeholder.svg', message: 'Только что выиграл AWP!', time: '2 мин' },
  { id: 2, user: 'LuckyShot', avatar: '/placeholder.svg', message: 'Кто в рулетку?', time: '5 мин' },
  { id: 3, user: 'SkinHunter', avatar: '/placeholder.svg', message: 'Легендарка!!', time: '7 мин' },
];

const Index = () => {
  const [balance, setBalance] = useState(1250.50);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isSpinning, setIsSpinning] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [showExplosion, setShowExplosion] = useState(false);

  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple',
    legendary: 'bg-gold',
  };

  const handleSpin = () => {
    if (balance >= betAmount) {
      setIsSpinning(true);
      setBalance(prev => prev - betAmount);
      setTimeout(() => {
        setIsSpinning(false);
        const won = Math.random() > 0.5;
        if (won) {
          setBalance(prev => prev + betAmount * 2);
        }
      }, 3000);
    }
  };

  const handleDeposit = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoFAACAgoSGiIqMjpCSlJaYmpyeoKKkpqiqrK6wsrS2uLq8vsDCxMbIyszO0NLU1tja3N7g4uTm6Orq6Ojm5OLg3tza2NbU0tDOzMrIxsS+vLq4tre0sq+urKqop6SioZ+enJqYl5WTkpCPjYyKiYeFhIOCgYB/fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjY2JhYF9fXl1cXFtaWVlYWFdWVlVUVFNTUlFRUFBPT05OTU1MTEtLSkpJSUlISEdHRkZGRUVEREREQ0NDQkJCQkFBQUFAQEBAQD9/f39/fn5+fn5+fX19fX19fH18fHx8fHx7e3t7e3t6enp6enp6enl5eXl5eXl5eHh4eXl5eXl5eXp6enp6ent7e3t7e3x8fHx8fHx9fX19fX59fn5+fn5/f39/f4BAQEBAQUFBQUFCQkJCQkNDQ0NDRERERERFRUVGRkZGR0dHSEhISUlJSkpKS0tLTExMTU1OTk5PT1BQUFBRUVJSUlNTVFRUVVZWVldXWFhZWVlaWlxcXV1eX19gYGFiYmNkZGVmZ2doaWpqa2xtbm5vcHFxcnN0dXZ3d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNztDS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onp6ejo5uXk4+Lh4N/e3dzb2tnY19bV1NPSz87NzMrJx8bFxMLBv764t7a0s7Gwr66sq6mop6WjoquhnJqYl5WTkY+OjImIhYSDgYB+fXt5eHZ1c3JwbnVs');
    audio.volume = 0.3;
    audio.play().catch(() => {});
    
    setShowExplosion(true);
    setTimeout(() => setShowExplosion(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showExplosion && (
        <div className="explosion-effect">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="explosion-particle"
              style={{
                background: `hsl(${45 + i * 30}, 85%, 54%)`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-100px)`,
              }}
            />
          ))}
        </div>
      )}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center font-bold text-2xl text-primary-foreground">
              A
            </div>
            <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              AGRO CASE
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-gold' : 'text-foreground hover:text-foreground'}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('roulette')} className={activeTab === 'roulette' ? 'text-gold' : 'text-foreground hover:text-foreground'}>
              Рулетка
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('jackpot')} className={activeTab === 'jackpot' ? 'text-gold' : 'text-foreground hover:text-foreground'}>
              Джекпот
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('inventory')} className={activeTab === 'inventory' ? 'text-gold' : 'text-foreground hover:text-foreground'}>
              Инвентарь
            </Button>
          </nav>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Wallet" className="text-gold" size={20} />
                <span className="font-semibold text-gold">${balance.toFixed(2)}</span>
              </div>
              <Avatar className="cursor-pointer border-2 border-gold">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-purple text-white">U</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)} className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold">
              <Icon name="LogIn" className="mr-2" size={18} />
              Войти через Steam
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {activeTab === 'home' && (
              <div className="space-y-8 animate-fade-in">
                <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple/20 to-gold/20 p-8 md:p-12 border border-gold/30">
                  <div className="relative z-10">
                    <Badge className="mb-4 bg-gold text-primary-foreground">Новичкам</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Получи <span className="text-gold">+100%</span> к первому депозиту
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl">
                      Пополни баланс и удвой свой первый депозит! Начни выигрывать легендарные скины CS2 прямо сейчас.
                    </p>
                    <Button size="lg" onClick={handleDeposit} className="bg-gold text-primary-foreground hover:bg-gold/90 font-semibold">
                      Пополнить баланс
                    </Button>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse-gold"></div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Доступные кейсы</h3>
                    <Badge className="bg-gold text-primary-foreground">от 39₽ до 10,000₽</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {caseBoxes.map((caseBox) => (
                      <Card key={caseBox.id} className="group overflow-hidden bg-card hover:border-gold transition-all duration-300 cursor-pointer">
                        <div className={`relative aspect-square bg-gradient-to-br ${caseBox.color} p-6 flex items-center justify-center overflow-hidden`}>
                          <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <Icon name="Package" className="text-white" size={40} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-black/50 text-white backdrop-blur-sm">
                              {caseBox.items.length}+ предметов
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-2 group-hover:text-gold transition-colors">{caseBox.name}</h4>
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{caseBox.items.join(', ')}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gold">{caseBox.price}₽</span>
                            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                              Открыть
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                <section className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-gold" />
                    Последние выигрыши
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-purple text-white">W</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">Winner{i}</p>
                            <p className="text-sm text-muted-foreground">выиграл AWP | Dragon Lore</p>
                          </div>
                        </div>
                        <span className="text-xl font-bold text-gold">$1,850</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'roulette' && (
              <div className="space-y-6 animate-fade-in">
                <Card className="p-8 bg-card border-gold/30">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    <Icon name="CircleDot" className="inline mr-2 text-gold" />
                    Классическая рулетка
                  </h2>
                  
                  <div className="relative mb-8 bg-muted rounded-xl p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-slide-in"></div>
                    <div className={`flex gap-4 overflow-hidden ${isSpinning ? 'animate-slide-in' : ''}`}>
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`min-w-[120px] h-[120px] rounded-xl flex items-center justify-center text-white font-bold text-2xl ${
                            i % 3 === 0 ? 'bg-gold' : i % 3 === 1 ? 'bg-purple' : 'bg-destructive'
                          }`}
                        >
                          {i % 3 === 0 ? '×2' : i % 3 === 1 ? '×3' : '×0'}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setBetAmount(Math.max(1, betAmount - 10))}
                        className="w-12 h-12"
                      >
                        -
                      </Button>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Ставка</p>
                        <p className="text-3xl font-bold text-gold">${betAmount}</p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setBetAmount(Math.min(balance, betAmount + 10))}
                        className="w-12 h-12"
                      >
                        +
                      </Button>
                    </div>

                    <Button
                      onClick={handleSpin}
                      disabled={isSpinning || balance < betAmount}
                      className="w-full h-14 text-lg font-bold bg-gold text-primary-foreground hover:bg-gold/90 disabled:opacity-50"
                    >
                      {isSpinning ? (
                        <>
                          <Icon name="Loader2" className="mr-2 animate-spin" />
                          Крутим...
                        </>
                      ) : (
                        'КРУТИТЬ'
                      )}
                    </Button>

                    <div className="grid grid-cols-3 gap-3">
                      {[10, 50, 100].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          onClick={() => setBetAmount(amount)}
                          className={betAmount === amount ? 'border-gold' : ''}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-4">Правила игры</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-gold mt-1" size={16} />
                      <span>Выберите сумму ставки и нажмите "КРУТИТЬ"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-gold mt-1" size={16} />
                      <span>Золотой сектор (×2) - удваивает вашу ставку</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-gold mt-1" size={16} />
                      <span>Фиолетовый сектор (×3) - утраивает вашу ставку</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-gold mt-1" size={16} />
                      <span>Красный сектор (×0) - вы теряете ставку</span>
                    </li>
                  </ul>
                </Card>
              </div>
            )}

            {activeTab === 'jackpot' && (
              <div className="animate-fade-in">
                <Card className="p-8 bg-card text-center border-gold/30">
                  <Icon name="Trophy" className="mx-auto mb-4 text-gold" size={64} />
                  <h2 className="text-3xl font-bold mb-4">Джекпот</h2>
                  <div className="text-6xl font-bold text-gold mb-6 animate-pulse-gold">
                    $15,847.50
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Участников: 12 | До розыгрыша: 5 минут
                  </p>
                  <Button className="bg-gold text-primary-foreground hover:bg-gold/90 font-semibold text-lg px-8 py-6">
                    Участвовать в розыгрыше
                  </Button>
                </Card>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div className="animate-fade-in">
                <Card className="p-6 bg-card">
                  <h2 className="text-2xl font-bold mb-6">Ваш инвентарь</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockSkins.slice(0, 4).map((skin) => (
                      <div key={skin.id} className="bg-muted rounded-lg p-4 hover:border-gold border border-transparent transition-all">
                        <img src={skin.image} alt={skin.name} className="w-full aspect-square object-cover rounded mb-2" />
                        <p className="text-sm font-semibold truncate">{skin.name}</p>
                        <p className="text-gold font-bold">${skin.price}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-card border-border">
              <div className="p-4 border-b border-border">
                <h3 className="font-bold flex items-center gap-2">
                  <Icon name="MessageCircle" className="text-gold" />
                  Live Чат
                </h3>
              </div>
              <ScrollArea className="h-[500px] p-4">
                <div className="space-y-4">
                  {mockMessages.map((msg) => (
                    <div key={msg.id} className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={msg.avatar} />
                        <AvatarFallback className="bg-purple text-white text-xs">
                          {msg.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Написать сообщение..."
                    className="flex-1 bg-muted px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    disabled={!isLoggedIn}
                  />
                  <Button size="sm" className="bg-gold text-primary-foreground" disabled={!isLoggedIn}>
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-gold">О казино</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Игры</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">Рулетка</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Джекпот</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Промокоды</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 CS2 Casino. Все права защищены. Играйте ответственно.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;