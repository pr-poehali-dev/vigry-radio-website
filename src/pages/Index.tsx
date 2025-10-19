import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const videos = [
    {
      id: 1,
      title: 'Летняя волна',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=450&fit=crop',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Ночной город',
      thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=450&fit=crop',
      duration: '4:12'
    },
    {
      id: 3,
      title: 'Электрические сны',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
      duration: '3:28'
    },
    {
      id: 4,
      title: 'Cosmic Flow',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
      duration: '5:01'
    },
    {
      id: 5,
      title: 'Ритм улиц',
      thumbnail: 'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=800&h=450&fit=crop',
      duration: '3:55'
    },
    {
      id: 6,
      title: 'Melody Dreams',
      thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=450&fit=crop',
      duration: '4:33'
    }
  ];

  const playlists = [
    {
      id: 1,
      name: 'Лучшее 2024',
      cover: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop',
      count: 24
    },
    {
      id: 2,
      name: 'Летние хиты',
      cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
      count: 18
    },
    {
      id: 3,
      name: 'Ночной драйв',
      cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
      count: 31
    },
    {
      id: 4,
      name: 'Акустика',
      cover: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop',
      count: 15
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Radio" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                VIGRY RADIO
              </h1>
            </div>

            <nav className="hidden md:flex gap-8">
              {['home', 'videos', 'playlists', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'videos' && 'Видео'}
                  {section === 'playlists' && 'Плейлисты'}
                  {section === 'about' && 'О канале'}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="hover-scale"
                onClick={() => window.open('https://t.me/vigryradio', '_blank')}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 hover-scale"
                onClick={() => window.open('https://vk.com/vigryradio', '_blank')}
              >
                <span className="mr-2">VK</span>
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <section className="container mx-auto px-6 py-20 fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Музыка, которая вдохновляет
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Смотрите лучшие музыкальные видео и открывайте новые треки каждый день
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover-scale text-lg px-8"
                onClick={() => setActiveSection('videos')}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-scale text-lg px-8"
                onClick={() => setActiveSection('playlists')}
              >
                <Icon name="ListMusic" size={20} className="mr-2" />
                Плейлисты
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card hover:bg-card/80 transition-colors hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Video" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100+ видео</h3>
              <p className="text-muted-foreground">Эксклюзивные клипы и live-выступления</p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-colors hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50K подписчиков</h3>
              <p className="text-muted-foreground">Присоединяйтесь к нашему комьюнити</p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-colors hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Новинки каждый день</h3>
              <p className="text-muted-foreground">Свежая музыка и эксклюзивы</p>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'videos' && (
        <section className="container mx-auto px-6 py-12 fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Видео</h2>
            <p className="text-muted-foreground">Смотрите наши лучшие клипы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden bg-card hover:bg-card/80 transition-all cursor-pointer hover-scale"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">VIGRY RADIO</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'playlists' && (
        <section className="container mx-auto px-6 py-12 fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Плейлисты</h2>
            <p className="text-muted-foreground">Подборки лучших треков</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <Card
                key={playlist.id}
                className="group overflow-hidden bg-card hover:bg-card/80 transition-all cursor-pointer hover-scale"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button size="icon" className="bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={20} className="ml-0.5" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {playlist.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{playlist.count} треков</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="container mx-auto px-6 py-12 fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">О канале</h2>

            <Card className="p-8 bg-card mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                  <Icon name="Radio" size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">VIGRY RADIO</h3>
                  <p className="text-muted-foreground">Музыкальный видео-канал</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  VIGRY RADIO — это современный музыкальный канал, который объединяет лучшие видео-клипы,
                  live-выступления и эксклюзивный контент от талантливых артистов.
                </p>
                <p>
                  Мы создаём уникальную атмосферу для ценителей качественной музыки и визуального искусства.
                  Каждое видео тщательно отобрано и представлено в лучшем качестве для вашего удовольствия.
                </p>
                <p>
                  Присоединяйтесь к нашему сообществу в Telegram и VK, чтобы первыми узнавать о новых релизах
                  и участвовать в жизни канала!
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Подписывайтесь на нас:</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 hover-scale"
                    onClick={() => window.open('https://t.me/vigryradio', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 hover-scale"
                    onClick={() => window.open('https://vk.com/vigryradio', '_blank')}
                  >
                    <span className="mr-2">VK</span>
                    <Icon name="ExternalLink" size={18} />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center bg-card">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Видео</div>
              </Card>
              <Card className="p-6 text-center bg-card">
                <div className="text-3xl font-bold text-primary mb-2">50K</div>
                <div className="text-sm text-muted-foreground">Подписчиков</div>
              </Card>
              <Card className="p-6 text-center bg-card">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Просмотров</div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Radio" size={18} className="text-white" />
              </div>
              <span className="font-semibold">VIGRY RADIO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 VIGRY RADIO. Музыка для души.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
