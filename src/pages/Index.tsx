import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useAccount, useDisconnect } from 'wagmi';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('RU');
  const [selectedEarningMethod, setSelectedEarningMethod] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('1000');
  
  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 51,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const translations = {
    RU: {
      nav: {
        home: 'Главная',
        earning: 'Заработок',
        airdrop: 'Аирдроп',
        reviews: 'Отзывы',
        wallet: 'Кошелек',
        contacts: 'Контакты'
      },
      hero: {
        title: 'Подключите кошелек и начните зарабатывать',
        subtitle: 'Поддерживаем MetaMask (injected), WalletConnect (QR) и Coinbase Wallet. После подключения покажем ваш адрес, сеть и баланс.',
        description: 'Быстрые действия: копировать адрес, открыть в обозревателе, отключить.',
        connectButton: 'Подключить кошелек'
      },
      airdrop: {
        title: 'Аирдроп: 50 USDT + $300,000 призовой пул',
        description: 'Подключите кошелек и поделитесь в соцсетях, чтобы получить бонусы!',
        prizePool: '$300,000',
        prizeDescription: 'Призовой пул за подключение кошелька и отметку в соцсетях',
        days: 'дней',
        hours: 'часов',
        minutes: 'минут',
        seconds: 'секунд',
        claimButton: 'Получить 50 USDT'
      },
      socialReward: {
        title: 'Получите дополнительные $10 за репост в соцсетях!',
        description: 'Поделитесь информацией о нашем проекте в любой социальной сети и получите бонусные $10 на счет'
      },
      earningMethods: {
        title: 'Способы заработка',
        description: 'Выберите подходящий метод заработка криптовалюты и начните свой путь к финансовой свободе.',
        staking: {
          title: 'Стейкинг',
          income: 'Доходность: 15-45% годовых',
          minAmount: 'Минимальная сумма: от 1000 USDT',
          risk: 'Риск: Низкие'
        },
        mining: {
          title: 'Майнинг',
          income: 'Доходность: 5-15% в месяц',
          minAmount: 'Минимальная сумма: от 500 USDT',
          risk: 'Риск: Средние'
        },
        trading: {
          title: 'Трейдинг',
          income: 'Доходность: 3-8% в месяц',
          minAmount: 'Минимальная сумма: от 200 USDT',
          risk: 'Риск: Высокие'
        },
        farming: {
          title: 'Фарминг ликвидности',
          income: 'Доходность: 10-25% годовых',
          minAmount: 'Минимальная сумма: от 500 USDT',
          risk: 'Риск: Средние'
        },
        airdrops: {
          title: 'Аирдропы',
          income: 'Доходность: Бесплатные токены',
          minAmount: 'Минимальная сумма: 0 USDT',
          risk: 'Риск: Низкие'
        },
        lending: {
          title: 'Кредитование',
          income: 'Доходность: 5-12% годовых',
          minAmount: 'Минимальная сумма: от 100 USDT',
          risk: 'Риск: Низкие'
        },
        startButton: 'Начать'
      },
      calculator: {
        title: 'Калькулятор доходности',
        investmentAmount: 'Сумма инвестирования (USDT)',
        earningMethod: 'Метод заработка',
        dailyIncome: 'Дневная доходность',
        monthlyIncome: 'Месячная доходность',
        halfYearIncome: 'Полгода',
        yearlyIncome: 'Годовая доходность'
      },
      reviews: {
        title: 'Отзывы клиентов',
        subtitle: 'Реальные истории успеха наших клиентов со всего мира.'
      },
      wallets: {
        title: 'Подключение кошелька',
        subtitle: 'Поддерживаем MetaMask, WalletConnect и Coinbase.',
        metamask: {
          title: 'MetaMask',
          description: 'Самый популярный браузерный кошелек для работы с Ethereum и другими блокчейнами'
        },
        walletconnect: {
          title: 'WalletConnect',
          description: 'Подключение через QR-код к мобильным кошелькам. Project ID:'
        },
        coinbase: {
          title: 'Coinbase Wallet',
          description: 'Официальный кошелек от крупнейшей биржи Coinbase'
        },
        connectButton: 'Подключить'
      }
    },
    EN: {
      nav: {
        home: 'Home',
        earning: 'Earning',
        airdrop: 'Airdrop',
        reviews: 'Reviews',
        wallet: 'Wallet',
        contacts: 'Contacts'
      },
      hero: {
        title: 'Connect wallet and start earning',
        subtitle: 'We support MetaMask (injected), WalletConnect (QR) and Coinbase Wallet. After connecting we will show your address, network and balance.',
        description: 'Quick actions: copy address, open in explorer, disconnect.',
        connectButton: 'Connect wallet'
      },
      airdrop: {
        title: 'Airdrop: 50 USDT + $300,000 prize pool',
        description: 'Connect wallet and share on social media to get bonuses!',
        prizePool: '$300,000',
        prizeDescription: 'Prize pool for connecting wallet and social media activity',
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        claimButton: 'Claim 50 USDT'
      },
      socialReward: {
        title: 'Get additional $10 for social media repost!',
        description: 'Share information about our project on any social network and get bonus $10 to your account'
      },
      earningMethods: {
        title: 'Earning Methods',
        description: 'Choose the right cryptocurrency earning method and start your path to financial freedom.',
        staking: {
          title: 'Staking',
          income: 'Yield: 15-45% APY',
          minAmount: 'Minimum amount: from 1000 USDT',
          risk: 'Risk: Low'
        },
        mining: {
          title: 'Mining',
          income: 'Yield: 5-15% per month',
          minAmount: 'Minimum amount: from 500 USDT',
          risk: 'Risk: Medium'
        },
        trading: {
          title: 'Trading',
          income: 'Yield: 3-8% per month',
          minAmount: 'Minimum amount: from 200 USDT',
          risk: 'Risk: High'
        },
        farming: {
          title: 'Liquidity Farming',
          income: 'Yield: 10-25% APY',
          minAmount: 'Minimum amount: from 500 USDT',
          risk: 'Risk: Medium'
        },
        airdrops: {
          title: 'Airdrops',
          income: 'Yield: Free tokens',
          minAmount: 'Minimum amount: 0 USDT',
          risk: 'Risk: Low'
        },
        lending: {
          title: 'Lending',
          income: 'Yield: 5-12% APY',
          minAmount: 'Minimum amount: from 100 USDT',
          risk: 'Risk: Low'
        },
        startButton: 'Start'
      },
      calculator: {
        title: 'Yield Calculator',
        investmentAmount: 'Investment Amount (USDT)',
        earningMethod: 'Earning Method',
        dailyIncome: 'Daily Income',
        monthlyIncome: 'Monthly Income',
        halfYearIncome: 'Half Year',
        yearlyIncome: 'Yearly Income'
      },
      reviews: {
        title: 'Client Reviews',
        subtitle: 'Real success stories from our clients worldwide.'
      },
      wallets: {
        title: 'Wallet Connection',
        subtitle: 'We support MetaMask, WalletConnect and Coinbase.',
        metamask: {
          title: 'MetaMask',
          description: 'Most popular browser wallet for working with Ethereum and other blockchains'
        },
        walletconnect: {
          title: 'WalletConnect',
          description: 'Connect via QR code to mobile wallets. Project ID:'
        },
        coinbase: {
          title: 'Coinbase Wallet',
          description: 'Official wallet from the largest exchange Coinbase'
        },
        connectButton: 'Connect'
      }
    },
    ES: {
      nav: {
        home: 'Inicio',
        earning: 'Ganancias',
        airdrop: 'Airdrop',
        reviews: 'Reseñas',
        wallet: 'Cartera',
        contacts: 'Contactos'
      },
      hero: {
        title: 'Conecta la cartera y comienza a ganar',
        subtitle: 'Admitimos MetaMask (inyectado), WalletConnect (QR) y Coinbase Wallet. Después de conectar mostraremos tu dirección, red y saldo.',
        description: 'Acciones rápidas: copiar dirección, abrir en explorador, desconectar.',
        connectButton: 'Conectar cartera'
      },
      airdrop: {
        title: 'Airdrop: 50 USDT + $300,000 de premio',
        description: '¡Conecta la cartera y comparte en redes sociales para obtener bonos!',
        prizePool: '$300,000',
        prizeDescription: 'Premio por conectar cartera y actividad en redes sociales',
        days: 'días',
        hours: 'horas',
        minutes: 'minutos',
        seconds: 'segundos',
        claimButton: 'Reclamar 50 USDT'
      },
      socialReward: {
        title: '¡Obtén $10 adicionales por repostear en redes sociales!',
        description: 'Comparte información sobre nuestro proyecto en cualquier red social y obtén $10 de bonificación en tu cuenta'
      },
      earningMethods: {
        title: 'Métodos de Ganancias',
        description: 'Elige el método adecuado para ganar criptomonedas y comienza tu camino hacia la libertad financiera.',
        staking: {
          title: 'Staking',
          income: 'Rendimiento: 15-45% anual',
          minAmount: 'Cantidad mínima: desde 1000 USDT',
          risk: 'Riesgo: Bajo'
        },
        mining: {
          title: 'Minería',
          income: 'Rendimiento: 5-15% por mes',
          minAmount: 'Cantidad mínima: desde 500 USDT',
          risk: 'Riesgo: Medio'
        },
        trading: {
          title: 'Trading',
          income: 'Rendimiento: 3-8% por mes',
          minAmount: 'Cantidad mínima: desde 200 USDT',
          risk: 'Riesgo: Alto'
        },
        farming: {
          title: 'Farming de Liquidez',
          income: 'Rendimiento: 10-25% anual',
          minAmount: 'Cantidad mínima: desde 500 USDT',
          risk: 'Riesgo: Medio'
        },
        airdrops: {
          title: 'Airdrops',
          income: 'Rendimiento: Tokens gratuitos',
          minAmount: 'Cantidad mínima: 0 USDT',
          risk: 'Riesgo: Bajo'
        },
        lending: {
          title: 'Préstamos',
          income: 'Rendimiento: 5-12% anual',
          minAmount: 'Cantidad mínima: desde 100 USDT',
          risk: 'Riesgo: Bajo'
        },
        startButton: 'Comenzar'
      },
      calculator: {
        title: 'Calculadora de Rendimiento',
        investmentAmount: 'Cantidad de Inversión (USDT)',
        earningMethod: 'Método de Ganancia',
        dailyIncome: 'Ingreso Diario',
        monthlyIncome: 'Ingreso Mensual',
        halfYearIncome: 'Medio Año',
        yearlyIncome: 'Ingreso Anual'
      },
      reviews: {
        title: 'Reseñas de Clientes',
        subtitle: 'Historias reales de éxito de nuestros clientes de todo el mundo.'
      },
      wallets: {
        title: 'Conexión de Cartera',
        subtitle: 'Admitimos MetaMask, WalletConnect y Coinbase.',
        metamask: {
          title: 'MetaMask',
          description: 'La cartera de navegador más popular para trabajar con Ethereum y otras blockchains'
        },
        walletconnect: {
          title: 'WalletConnect',
          description: 'Conectar a través de código QR a carteras móviles. ID del Proyecto:'
        },
        coinbase: {
          title: 'Coinbase Wallet',
          description: 'Cartera oficial del mayor exchange Coinbase'
        },
        connectButton: 'Conectar'
      }
    },
    SW: {
      nav: {
        home: 'Nyumbani',
        earning: 'Kupata',
        airdrop: 'Airdrop',
        reviews: 'Maoni',
        wallet: 'Mkoba',
        contacts: 'Mawasiliano'
      },
      hero: {
        title: 'Unganisha mkoba na uanze kupata',
        subtitle: 'Tunasaidia MetaMask (iliyoingizwa), WalletConnect (QR) na Coinbase Wallet. Baada ya kuunganisha tutaonyesha anwani yako, mtandao na salio.',
        description: 'Vitendo vya haraka: nakili anwani, fungua katika kivinjari, tenganisha.',
        connectButton: 'Unganisha mkoba'
      },
      airdrop: {
        title: 'Airdrop: 50 USDT + $300,000 tuzo',
        description: 'Unganisha mkoba na ushiriki kwenye mitandao ya kijamii kupata bonasi!',
        prizePool: '$300,000',
        prizeDescription: 'Tuzo kwa kuunganisha mkoba na shughuli za mitandao ya kijamii',
        days: 'siku',
        hours: 'masaa',
        minutes: 'dakika',
        seconds: 'sekunde',
        claimButton: 'Dai 50 USDT'
      },
      socialReward: {
        title: 'Pata $10 za ziada kwa kuchapisha upya kwenye mitandao ya kijamii!',
        description: 'Shiriki maelezo kuhusu mradi wetu kwenye mtandao wowote wa kijamii na upate bonasi ya $10 kwenye akaunti yako'
      },
      earningMethods: {
        title: 'Njia za Kupata',
        description: 'Chagua njia sahihi ya kupata sarafu za kidijitali na uanze safari yako ya uhuru wa kifedha.',
        staking: {
          title: 'Staking',
          income: 'Mapato: 15-45% kwa mwaka',
          minAmount: 'Kiasi cha chini: kutoka 1000 USDT',
          risk: 'Hatari: Chini'
        },
        mining: {
          title: 'Uchimbaji',
          income: 'Mapato: 5-15% kwa mwezi',
          minAmount: 'Kiasi cha chini: kutoka 500 USDT',
          risk: 'Hatari: Kati'
        },
        trading: {
          title: 'Biashara',
          income: 'Mapato: 3-8% kwa mwezi',
          minAmount: 'Kiasi cha chini: kutoka 200 USDT',
          risk: 'Hatari: Juu'
        },
        farming: {
          title: 'Kilimo cha Ukwasi',
          income: 'Mapato: 10-25% kwa mwaka',
          minAmount: 'Kiasi cha chini: kutoka 500 USDT',
          risk: 'Hatari: Kati'
        },
        airdrops: {
          title: 'Airdrops',
          income: 'Mapato: Alama za bure',
          minAmount: 'Kiasi cha chini: 0 USDT',
          risk: 'Hatari: Chini'
        },
        lending: {
          title: 'Kukopa',
          income: 'Mapato: 5-12% kwa mwaka',
          minAmount: 'Kiasi cha chini: kutoka 100 USDT',
          risk: 'Hatari: Chini'
        },
        startButton: 'Anza'
      },
      calculator: {
        title: 'Kikokotoa cha Mapato',
        investmentAmount: 'Kiasi cha Uwekezaji (USDT)',
        earningMethod: 'Njia ya Kupata',
        dailyIncome: 'Mapato ya Kila Siku',
        monthlyIncome: 'Mapato ya Mwezi',
        halfYearIncome: 'Nusu Mwaka',
        yearlyIncome: 'Mapato ya Mwaka'
      },
      reviews: {
        title: 'Maoni ya Wateja',
        subtitle: 'Hadithi za kweli za mafanikio kutoka kwa wateja wetu duniani kote.'
      },
      wallets: {
        title: 'Muunganisho wa Mkoba',
        subtitle: 'Tunasaidia MetaMask, WalletConnect na Coinbase.',
        metamask: {
          title: 'MetaMask',
          description: 'Mkoba wa kivinjari maarufu zaidi wa kufanya kazi na Ethereum na blockchain nyingine'
        },
        walletconnect: {
          title: 'WalletConnect',
          description: 'Unganisha kupitia msimbo wa QR kwenye mikoba ya simu. Kitambulisho cha Mradi:'
        },
        coinbase: {
          title: 'Coinbase Wallet',
          description: 'Mkoba rasmi kutoka kwa ubadilishaji mkuu Coinbase'
        },
        connectButton: 'Unganisha'
      }
    }
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  const handleEarningMethodClick = (method: string) => {
    if (!isConnected) {
      alert(selectedLanguage === 'RU' ? 
        'Сначала подключите кошелек!' : 
        selectedLanguage === 'EN' ? 'Connect wallet first!' :
        selectedLanguage === 'ES' ? '¡Conecta la cartera primero!' :
        'Unganisha mkoba kwanza!'
      );
      return;
    }
    setSelectedEarningMethod(method);
  };

  const calculateIncome = () => {
    const amount = parseFloat(investmentAmount) || 0;
    const rates = {
      'staking': { daily: 0.12, monthly: 3.75, halfYear: 22.5, yearly: 45 },
      'mining': { daily: 0.33, monthly: 10, halfYear: 60, yearly: 120 },
      'trading': { daily: 0.18, monthly: 5.5, halfYear: 33, yearly: 66 },
      'farming': { daily: 0.07, monthly: 2.08, halfYear: 12.5, yearly: 25 },
      'lending': { daily: 0.03, monthly: 1, halfYear: 6, yearly: 12 }
    };
    
    const method = selectedEarningMethod as keyof typeof rates;
    if (!method || !rates[method]) return { daily: 0, monthly: 0, halfYear: 0, yearly: 0 };
    
    return {
      daily: (amount * rates[method].daily / 100),
      monthly: (amount * rates[method].monthly / 100),
      halfYear: (amount * rates[method].halfYear / 100),
      yearly: (amount * rates[method].yearly / 100)
    };
  };

  const income = calculateIncome();

  const reviews = [
    {
      name: 'Александр Иванов',
      country: 'Россия',
      text: 'За 3 месяца увеличил депозит в 2 раза. Очень доволен сервисом и поддержкой. Вывел уже более 5000 USDT без проблем.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format'
    },
    {
      name: 'Мария Смирнова',
      country: 'Казахстан',
      text: 'Вывела уже более 5000 USDT. Все выплаты вовремя, без задержек. Рекомендую! Платформа действительно работает.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format'
    },
    {
      name: 'John Smith',
      country: 'USA',
      text: 'The best platform for crypto earnings. Professional team and transparent conditions. I\'ve doubled my investment in just 5 months.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format'
    },
    {
      name: 'Elena Petrova',
      country: 'Ukraine',
      text: 'Начала с небольшой суммы, теперь зарабатываю стабильно каждый месяц. Спасибо за возможность приумножить сбережения!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format'
    },
    {
      name: 'Liu Wei',
      country: 'China',
      text: '非常好的平台，提现速度快，客服的时效性，专业性都经很棒的多了，我已经赚了超过2000 USDT。',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face&auto=format'
    },
    {
      name: 'Sarah Brown',
      country: 'UK',
      text: 'I was skeptical at first, but after 3 months I can confirm this is legit. Great returns and excellent customer support!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Wallet" className="text-neon-blue" size={24} />
            <span className="text-xl font-bold text-white">CryptoRichLife</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.home}</a>
            <a href="#earning" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.earning}</a>
            <a href="#airdrop" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.airdrop}</a>
            <a href="#reviews" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.reviews}</a>
            <a href="#wallet" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.wallet}</a>
            <a href="#contacts" className="text-gray-300 hover:text-neon-blue transition-colors">{t.nav.contacts}</a>
          </div>

          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-20 bg-dark-card border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-dark-card border-gray-700">
              <SelectItem value="RU">RU</SelectItem>
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="ES">ES</SelectItem>
              <SelectItem value="SW">SW</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <w3m-button />
            
            {isConnected && address && (
              <div className="max-w-md p-4 bg-dark-card rounded-lg border border-neon-green/20 space-y-2">
                <p className="text-neon-green text-sm text-center">
                  <strong>Адрес:</strong> {address.slice(0, 6)}...{address.slice(-4)}
                </p>
                {chain && (
                  <p className="text-neon-blue text-sm text-center">
                    <strong>Сеть:</strong> {chain.name}
                  </p>
                )}
                <div className="flex justify-center">
                  <Button 
                    onClick={() => disconnect()}
                    variant="outline" 
                    size="sm"
                    className="text-red-400 border-red-400 hover:bg-red-400/10"
                  >
                    Отключить
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Airdrop Section */}
      <section id="airdrop" className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{t.airdrop.title}</h2>
              <p className="text-white/90 mb-6">{t.airdrop.description}</p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-white/80">{t.airdrop.days}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-white/80">{t.airdrop.hours}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-white/80">{t.airdrop.minutes}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-white/80">{t.airdrop.seconds}</div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">{t.airdrop.prizePool}</div>
                <p className="text-white/90">{t.airdrop.prizeDescription}</p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => handleEarningMethodClick('airdrop')}
                  className="bg-neon-blue hover:bg-neon-blue/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  {t.airdrop.claimButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Reward Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-neon-blue to-blue-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{t.socialReward.title}</h3>
              <p className="text-white/90 mb-8">{t.socialReward.description}</p>
              
              <div className="flex justify-center space-x-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Icon name="Twitter" className="mr-2" size={20} />
                  Twitter
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </Button>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Icon name="Facebook" className="mr-2" size={20} />
                  Facebook
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Earning Methods Section */}
      <section id="earning" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.earningMethods.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.earningMethods.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Staking */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" className="text-blue-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.staking.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.staking.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.staking.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.staking.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('staking')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>

            {/* Mining */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Pickaxe" className="text-yellow-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.mining.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.mining.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.mining.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.mining.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('mining')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>

            {/* Trading */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-red-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.trading.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.trading.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.trading.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.trading.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('trading')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>

            {/* Farming */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" className="text-green-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.farming.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.farming.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.farming.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.farming.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('farming')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>

            {/* Airdrops */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gift" className="text-purple-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.airdrops.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.airdrops.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.airdrops.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.airdrops.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('airdrops')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>

            {/* Lending */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-indigo-500" size={32} />
                </div>
                <CardTitle className="text-white">{t.earningMethods.lending.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{t.earningMethods.lending.income}</p>
                <p className="text-gray-400 mb-2">{t.earningMethods.lending.minAmount}</p>
                <p className="text-gray-400 mb-6">{t.earningMethods.lending.risk}</p>
                <Button 
                  onClick={() => handleEarningMethodClick('lending')}
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white"
                >
                  {t.earningMethods.startButton}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6 bg-dark-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{t.calculator.title}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">{t.calculator.investmentAmount}</label>
                  <Input 
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="bg-dark-bg border-gray-700 text-white"
                    placeholder="1000"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">{t.calculator.earningMethod}</label>
                  <Select value={selectedEarningMethod} onValueChange={setSelectedEarningMethod}>
                    <SelectTrigger className="bg-dark-bg border-gray-700 text-white">
                      <SelectValue placeholder="Выберите метод" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-bg border-gray-700">
                      <SelectItem value="staking">Стейкинг (15% годовых)</SelectItem>
                      <SelectItem value="mining">Майнинг (10% в месяц)</SelectItem>
                      <SelectItem value="trading">Трейдинг (5.5% в месяц)</SelectItem>
                      <SelectItem value="farming">Фарминг ликвидности (25% годовых)</SelectItem>
                      <SelectItem value="lending">Кредитование (12% годовых)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-dark-bg border-gray-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-neon-blue text-2xl font-bold">${income.daily.toFixed(2)}</div>
                    <div className="text-gray-400">{t.calculator.dailyIncome}</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-dark-bg border-gray-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-neon-green text-2xl font-bold">${income.monthly.toFixed(2)}</div>
                    <div className="text-gray-400">{t.calculator.monthlyIncome}</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-dark-bg border-gray-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-neon-pink text-2xl font-bold">${income.halfYear.toFixed(2)}</div>
                    <div className="text-gray-400">{t.calculator.halfYearIncome}</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-dark-bg border-gray-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-yellow-400 text-2xl font-bold">${income.yearly.toFixed(2)}</div>
                    <div className="text-gray-400">{t.calculator.yearlyIncome}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Connection Section */}
      <section id="wallet" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.wallets.title}</h2>
            <p className="text-gray-400">{t.wallets.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* MetaMask */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t.wallets.metamask.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{t.wallets.metamask.description}</p>
                <w3m-button />
              </CardContent>
            </Card>

            {/* WalletConnect */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="QrCode" className="text-blue-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t.wallets.walletconnect.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{t.wallets.walletconnect.description}</p>
                <p className="text-xs text-gray-500 mb-4">1f381251dc9bb03a8ed7e7cd7928f9ff</p>
                <w3m-button />
              </CardContent>
            </Card>

            {/* Coinbase Wallet */}
            <Card className="bg-dark-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t.wallets.coinbase.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{t.wallets.coinbase.description}</p>
                <w3m-button />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-6 bg-dark-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.reviews.title}</h2>
            <p className="text-gray-400">{t.reviews.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-dark-bg border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wallet" className="text-neon-blue" size={24} />
            <span className="text-xl font-bold text-white">CryptoRichLife</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 CryptoRichLife. {selectedLanguage === 'RU' ? 'Все права защищены.' : 
            selectedLanguage === 'EN' ? 'All rights reserved.' :
            selectedLanguage === 'ES' ? 'Todos los derechos reservados.' :
            'Haki zote zimehifadhiwa.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;