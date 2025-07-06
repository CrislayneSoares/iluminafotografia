'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Instagram, Mail, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const images = [
  { src: '/imgs/imagem1.jpeg', alt: 'Campos dourados ao entardecer', category: 'campo', story: 'A fotografia acaba, mas a luz floresce.' },
  { src: '/imgs/imagem2.jpeg', alt: 'Paisagem serena', category: 'aguas', story: 'Um pôr do sol que dança sobre as águas, e a natureza em sua forma mais poética.' },
  { src: '/imgs/imagem3.jpeg', alt: 'Horizonte dourado', category: 'campo', story: 'Uma leveza que toca o coração sem pedir palavras.' },
  { src: '/imgs/imagem4.jpeg', alt: 'No abraço do horizonte', category: 'campo', story: 'Entre galhos secos, a luz encontra espaço para renascer.' },
  { src: '/imgs/imagem5.jpeg', alt: 'Campo e céu', category: 'campo', story: 'O sol toca o que o tempo deixou para trás.' },
  { src: '/imgs/imagem6.jpeg', alt: 'Sonho do campo', category: 'campo', story: 'Na mira da minha lente, uma árvore-menina: cabelos secos ao vento, sonhando sob o azul do céu.' },
  { src: '/imgs/imagem7.jpeg', alt: 'O sol também sabe acariciar', category: 'aguas', story: 'O céu se encontra com o infinito das águas, e a luz se dissolve em poesia líquida.' },
  { src: '/imgs/imagem8.jpeg', alt: 'Carícia do sol', category: 'horizonte', story: 'Na simplicidade da natureza, a alma se reencontra.' },
  { src: '/imgs/imagem9.jpg', alt: 'Fotografia com alma', category: 'horizonte', story: 'Leveza que atravessa os mundos.' },
  { src: '/imgs/imagem10.JPG', alt: 'Poesia entre pedras', category: 'campo', story: 'Um momento suspenso, onde a alma respira leve e livre.' },
  { src: '/imgs/imagem11.jpeg', alt: 'Arte revelada', category: 'campo', story: 'Luz que acolhe, espinho que ensina.' },
  { src: '/imgs/imagem12.JPG', alt: 'Contemplação', category: 'poesia', story: 'Quando o olhar se volta para dentro, a paz floresce.' },
  { src: '/imgs/imagem13.JPG', alt: 'Revelação interior', category: 'poesia', story: 'Revelação interior' },
  { src: '/imgs/imagem14.JPG', alt: 'Beleza das estações', category: 'poesia', story: 'Que cada imagem seja um convite para respirar fundo e sorrir' },
  { src: '/imgs/imagem15.JPG', alt: 'Marcas do tempo', category: 'muros', story: 'Fotografar arquitetura é revelar a poesia do espaço em silêncio.' },
  { src: '/imgs/imagem16.JPG', alt: 'Estações', category: 'muros', story: 'Entre janelas antigas e galhos nus, a fotografia encontra o silêncio do tempo que passa.' },
  { src: '/imgs/imagem17.JPG', alt: 'Tempo e beleza', category: 'muros', story: 'Momentos simples, sentimentos imensos.' },
  { src: '/imgs/imagem18.jpeg', alt: 'Poesia entre pedras e passos', category: 'muros', story: 'Fotografar é treinar o olhar para encontrar poesia onde ninguém mais vê.' },
  { src: '/imgs/imagem19.JPG', alt: 'Paisagem contemplativa', category: 'aguas', story: 'Um instante em que a alma se reconhece na beleza da arquitetura.' },
  { src: '/imgs/imagem20.JPG', alt: 'Horizonte sereno', category: 'aguas', story: 'A luz do sol não pede licença, atravessa tudo, e pela lente, revela o que os olhos sozinhos não ousam sentir.' },
  { src: '/imgs/imagem21.JPG', alt: 'Campo em paz', category: 'aguas', story: 'Uma obra de Arte da vida REAL em forma de fotografia.' },
  { src: '/imgs/imagem22.JPG', alt: 'Estação dourada', category: 'estacoes', story: 'Entre silêncios de inverno, uma árvore ousa florir como quem insiste em existir onde tudo adormece.' },
  { src: '/imgs/imagem23.JPG', alt: 'Tempo em cores', category: 'estacoes', story: 'A vida ensina no tempo certo.' },
  { src: '/imgs/imagem24.JPG', alt: 'Beleza temporal', category: 'estacoes', story: 'Dois bancos vazios, e o inverno dizendo tudo o que o silêncio nunca ousou.' },
  { src: '/imgs/imagem25.jpeg', alt: 'Última contemplação', category: 'estacoes', story: 'A leveza que a fotografia autoral me traz não se explica, apenas se sente.' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const campoImages = [images[0], images[2], images[3], images[4], images[5], images[9], images[10]]; // 1, 3, 4, 5, 6, 10, 11
  const horizonteImages = [images[7], images[8]]; // 8, 9
  const poesiaVisualImages = [images[11], images[12], images[13]]; // 12, 13, 14
  const entreMurosJanelasImages = [images[14], images[15], images[16], images[17]]; // 15, 16, 17, 18
  const sobAguasImages = [images[1], images[6], images[18], images[19], images[20]]; // 2, 7, 19, 20, 21
  const estacoesTempoImages = [images[21], images[22], images[23], images[24]]; // 22, 23, 24, 25

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Detectar scroll para mostrar/ocultar botão "voltar ao topo"
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 300); // Mostra após 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      setSubmitMessage('Por favor, preencha todos os campos.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Aqui você pode integrar com um serviço de email como EmailJS, SendGrid, etc.
      // Por enquanto, vou simular o envio e abrir o cliente de email padrão
      const mailtoLink = `mailto:iluminafotografia4@gmail.com?subject=Contato via Ilumina Fotografia - ${name}&body=Nome: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMensagem:%0D%0A${message}`;
      
      window.open(mailtoLink, '_blank');
      
      setSubmitMessage('Mensagem enviada com sucesso! Verifique seu cliente de email.');
      e.currentTarget.reset();
    } catch {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };



  const GalleryImage = ({ image, index }: { image: typeof images[0], index: number }) => {
    return (
      <motion.article
        key={`${image.src}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: Math.min(index * 0.05, 0.3),
          duration: 0.4,
          ease: "easeOut"
        }}
        onClick={() => setSelectedImage(image)}
        className="group cursor-pointer"
      >
        <div className="bg-[#F5F3EF] rounded-2xl shadow-lg overflow-hidden border border-[#D6D6D6] hover:shadow-2xl transition-all duration-300">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority={index < 6}
              loading={index < 6 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Ver detalhes</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-gray-900">
      {/* Magazine Header */}
      <motion.header 
        id="home"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#F5F3EF] to-[#E8E1D4] border-b border-[#D6D6D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-3 sm:gap-4 mb-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/imgs/imagem4.jpeg"
                  alt="Ilumina Fotografia Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
                  ILUMINA
                </h1>
                <p className="text-sm sm:text-lg text-gray-600 font-light">FOTOGRAFIA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hamburger Menu - Fixed Position */}
      <nav ref={menuRef} className="fixed top-4 left-4 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-full bg-[#F5F3EF]/90 backdrop-blur-sm hover:bg-[#E8E1D4] transition-all duration-300 shadow-lg border border-[#D6D6D6]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#F5F3EF]/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-[#D6D6D6]"
            >
              <span className="text-sm font-medium text-gray-700">MENU</span>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-2 right-2 sm:left-4 sm:right-auto z-40 bg-[#F5F3EF]/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#D6D6D6] overflow-hidden min-w-[280px] sm:min-w-[300px] max-w-[calc(100vw-1rem)]"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">NAVEGAÇÃO</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        INÍCIO
                      </button>
                      <button
                        onClick={() => {
                          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        GALERIA
                      </button>
                      <button
                        onClick={() => {
                          setShowAbout(!showAbout);
                          setIsMenuOpen(false);
                          if (!showAbout) {
                            setTimeout(() => {
                              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        SOBRE
                      </button>
                      <button
                        onClick={() => {
                          setShowContact(!showContact);
                          setIsMenuOpen(false);
                          if (!showContact) {
                            setTimeout(() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        CONTATO
                      </button>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">CATEGORIAS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['all', 'campo', 'horizonte', 'poesia', 'muros', 'aguas', 'estacoes'].map((category) => (
              <button
                key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsMenuOpen(false);
                          }}
                          className={`px-2 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#E8E1D4] to-[#D6D6D6] text-gray-800 shadow-lg'
                    : 'bg-[#F5F3EF] text-gray-600 hover:bg-[#E8E1D4] border border-[#D6D6D6]'
                }`}
              >
                {category === 'all' ? 'TODAS' : category === 'campo' ? 'CAMPO' : category === 'horizonte' ? 'HORIZONTE' : category === 'poesia' ? 'POESIA VISUAL' : category === 'muros' ? 'ENTRE MUROS' : category === 'aguas' ? 'SOB ÁGUAS' : 'ESTAÇÕES'}
              </button>
            ))}
          </div>
        </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">REDES SOCIAIS</h3>
                    <div className="space-y-2">
                      <a
                        href="https://instagram.com/iluminafotografia_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                      <a
                        href="mailto:contato@iluminafotografia.com"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700 font-medium"
                      >
                        <Mail className="w-5 h-5" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F3EF] via-[#E8E1D4] to-[#D6D6D6] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23D6D6D6&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-800 mb-4 sm:mb-6">
              ILUMINA
              <span className="block bg-gradient-to-r from-[#E8E1D4] to-[#D6D6D6] bg-clip-text text-transparent">
                FOTOGRAFIA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <p className="mb-4 sm:mb-6">
              Bem-vindo ao Ilumina Fotografia, um espaço onde a imagem é poesia e o tempo respira devagar. 
              É mais do que um nome é uma intenção: clarear por dentro, levar luz onde só o silêncio chega, 
              tocar o invisível que habita em nós.
            </p>
            <p className="mb-4 sm:mb-6">
              São paisagens captadas com doçura, fragmentos da natureza e do horizonte que não apenas se veem, 
              mas se sentem. Mais do que obras visuais, são convites à contemplação. São respiros. 
              São toques sutis onde o mundo não alcança.
            </p>
            <p className="mb-4 sm:mb-6">
              Descubra imagens que acalmam, emocionam e iluminam. Acreditamos que a arte pode ser abrigo. 
              Que uma imagem pode curar, lembrar, acalmar. Leve para seu espaço uma fotografia que fale 
              com seus olhos e abrace sua alma.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AnimatePresence>
        {showAbout && (
          <motion.section
            id="about"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F5F3EF] overflow-hidden"
          >
            <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                      SOBRE
            </h2>
                    <button
                      onClick={() => setShowAbout(false)}
                      className="p-2 rounded-full bg-[#E8E1D4] hover:bg-[#D6D6D6] transition-colors duration-300 text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
            <div className="text-xl text-gray-700 leading-relaxed font-light space-y-6">
              <p>
                No silêncio entre a luz e a paisagem, nasce o Ilumina Fotografia, cada imagem é mais do que um registro 
                é um sussurro de beleza captado com a alma.
              </p>
              <p>
                As paisagens de campo, os recantos silenciosos da natureza e os instantes de luz suave são transformados 
                em poesia visual que fala com os olhos e toca o coração.
              </p>
              <p>
                São campos, árvores, céus e horizontes que sussurram aos olhos e abraçam o coração, tocando lugares 
                que o mundo não alcança.
              </p>
              <p>
                Aqui, não se vende apenas imagens oferece-se leveza, respiro e conexão com o que há de mais simples e essencial.
              </p>
            </div>
          </motion.div>
        </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-[#E8E1D4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              GALERIA
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            São fotografias autorais feitas com delicadeza, capazes de atravessar a correria do mundo e alcançar um lugar íntimo e sereno dentro de cada um de nós.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {selectedCategory === 'all' && (
                <div className="space-y-20">
                  {/* Campo */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">CAMPO</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Paisagens que capturam a essência do campo e sua beleza natural.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                      {campoImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Horizonte */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">HORIZONTE</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Momentos onde o horizonte se revela em sua plenitude.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {horizonteImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Poesia Visual */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">POESIA VISUAL</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Imagens que transcendem o visual e se tornam poesia.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                      {poesiaVisualImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Entre Muros e Janelas */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">ENTRE MUROS E JANELAS</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        A poesia revelada através da fotografia autoral.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {entreMurosJanelasImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Sob as Águas */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">SOB AS ÁGUAS</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Reflexões e contemplações sobre as águas.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {sobAguasImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* As Estações do Tempo */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">AS ESTAÇÕES DO TEMPO</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        A poesia das estações capturada em cada momento.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {estacoesTempoImages.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Filtered Gallery */}
              {selectedCategory !== 'all' && (
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                  >
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {selectedCategory === 'campo' ? 'CAMPO' : selectedCategory === 'horizonte' ? 'HORIZONTE' : selectedCategory === 'poesia' ? 'POESIA VISUAL' : selectedCategory === 'muros' ? 'ENTRE MUROS E JANELAS' : selectedCategory === 'aguas' ? 'SOB AS ÁGUAS' : 'AS ESTAÇÕES DO TEMPO'}
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl">
                      {selectedCategory === 'campo' 
                        ? 'Paisagens que capturam a essência do campo e sua beleza natural.'
                        : selectedCategory === 'horizonte' 
                          ? 'Momentos onde o horizonte se revela em sua plenitude.'
                          : selectedCategory === 'poesia' 
                            ? 'Imagens que transcendem o visual e se tornam poesia.'
                            : selectedCategory === 'muros' 
                              ? 'A poesia revelada através da fotografia autoral.'
                              : selectedCategory === 'aguas' 
                                ? 'Reflexões e contemplações sobre as águas.'
                                : 'A poesia das estações capturada em cada momento.'
                      }
                    </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {filteredImages.map((image, index) => (
                      <GalleryImage key={index} image={image} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl max-h-[95vh] bg-[#F5F3EF] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Image Container - Takes most of the space */}
              <div className="flex-1 relative overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                  width={1200}
                  height={800}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
              
              {/* Info Panel - Fixed at bottom */}
              <div className="bg-[#F5F3EF] p-4 sm:p-6 border-t border-[#D6D6D6]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{selectedImage.alt}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">{selectedImage.story}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedImage.category === 'campo' 
                      ? 'bg-[#E8E1D4] text-gray-800' 
                      : selectedImage.category === 'horizonte' 
                        ? 'bg-[#D6D6D6] text-gray-800'
                        : selectedImage.category === 'poesia' 
                          ? 'bg-[#E8E1D4] text-gray-800'
                          : selectedImage.category === 'muros' 
                            ? 'bg-[#D6D6D6] text-gray-800'
                            : selectedImage.category === 'aguas' 
                              ? 'bg-[#E8E1D4] text-gray-800'
                              : 'bg-[#D6D6D6] text-gray-800'
                  }`}>
                    {selectedImage.category === 'campo' ? 'Campo' : selectedImage.category === 'horizonte' ? 'Horizonte' : selectedImage.category === 'poesia' ? 'Poesia Visual' : selectedImage.category === 'muros' ? 'Entre Muros' : selectedImage.category === 'aguas' ? 'Sob Águas' : 'Estações'}
                  </span>
                </div>
              </div>
                  
                  {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#F5F3EF]/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#E8E1D4] transition-colors shadow-lg text-lg sm:text-xl"
              >
                ×
              </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <AnimatePresence>
        {showContact && (
          <motion.section 
            id="contact"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="py-20 px-6 bg-[#F5F3EF] overflow-hidden"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    CONTATO
                  </h2>
                  <button
                    onClick={() => setShowContact(false)}
                    className="w-10 h-10 bg-[#E8E1D4] rounded-full flex items-center justify-center text-gray-800 hover:bg-[#D6D6D6] transition-colors shadow-lg text-xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                  Entre em contato conosco para encomendas, dúvidas ou simplesmente para compartilhar sua experiência com nossas imagens.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-[#E8E1D4] rounded-2xl p-6 sm:p-8 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">INFORMAÇÕES</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-gray-700" />
                        <div>
                          <p className="font-semibold text-gray-800">Email</p>
                          <p className="text-gray-600">iluminafotografia4@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Instagram className="w-6 h-6 text-gray-700" />
                        <div>
                          <p className="font-semibold text-gray-800">Instagram</p>
                          <p className="text-gray-600">@iluminafotografia_</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-[#E8E1D4] rounded-2xl p-6 sm:p-8 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">ENVIE UMA MENSAGEM</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          required
                          className="w-full px-4 py-3 sm:py-4 rounded-lg bg-[#F5F3EF] border border-[#D6D6D6] text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D6D6D6] transition-all text-base"
                        />
                      </div>
                      <div>
                        <input
                          name="email"
                          type="email"
                          placeholder="Seu email"
                          required
                          className="w-full px-4 py-3 sm:py-4 rounded-lg bg-[#F5F3EF] border border-[#D6D6D6] text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D6D6D6] transition-all text-base"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          placeholder="Sua mensagem"
                          rows={4}
                          required
                          className="w-full px-4 py-3 sm:py-4 rounded-lg bg-[#F5F3EF] border border-[#D6D6D6] text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D6D6D6] transition-all resize-none text-base"
                        ></textarea>
                      </div>
                      
                      {submitMessage && (
                        <div className={`p-3 rounded-lg text-sm ${
                          submitMessage.includes('sucesso') 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {submitMessage}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-6 py-4 sm:py-3 bg-gradient-to-r from-[#E8E1D4] to-[#D6D6D6] text-gray-800 font-semibold rounded-lg transition-all duration-300 text-base ${
                          isSubmitting 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:shadow-lg active:scale-95'
                        }`}
                      >
                        {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                      </button>
                    </form>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Magazine Footer */}
      <footer className="bg-[#D6D6D6] text-gray-800 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="flex items-center justify-center mb-6">
            <p className="text-gray-700 text-base sm:text-lg font-light max-w-4xl">
              Ilumina Fotografia, onde cada imagem é um silêncio que toca, uma luz que revela o que o mundo apressado não nos permite ver!
            </p>
          </div>
          
          <div className="border-t border-gray-400 pt-8">
            <p className="text-gray-600 text-xs sm:text-sm">
              © 2024 Ilumina Fotografia - Galeria Visual • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 sm:w-12 sm:h-12 bg-[#F5F3EF]/90 backdrop-blur-sm hover:bg-[#E8E1D4] rounded-full flex items-center justify-center text-gray-700 hover:text-gray-800 transition-all duration-300 shadow-lg border border-[#D6D6D6] hover:shadow-xl group"
            aria-label="Voltar ao topo"
          >
            <svg 
              className="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
