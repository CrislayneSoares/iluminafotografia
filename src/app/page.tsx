'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Sparkles, Eye, Instagram, Mail, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';

const images = [
  { src: '/imgs/IMG_6485.jpeg', alt: 'Retrato emocional 1', category: 'emotion', story: 'A pureza de um momento capturado através das lentes' },
  { src: '/imgs/IMG_6475.jpeg', alt: 'Retrato emocional 2', category: 'emotion', story: 'Expressões que falam mais que mil palavras' },
  { src: '/imgs/IMG_5813.jpg', alt: 'Retrato mágico 1', category: 'magic', story: 'Magia cotidiana transformada em arte' },
  { src: '/imgs/F060DD42-BBEB-4D10-A3AD-D9F1386FB0A2(1).jpeg', alt: 'Retrato mágico 2', category: 'magic', story: 'Luz e sombra dançando em harmonia' },
  { src: '/imgs/E942966B-63A3-496A-AB31-B3544E6513D4.jpeg', alt: 'Retrato emocional 3', category: 'emotion', story: 'Vulnerabilidade transformada em força' },
  { src: '/imgs/e8e1914e-0d1b-4a05-a959-f521814fd082.JPG', alt: 'Retrato mágico 3', category: 'magic', story: 'Momentos que transcendem o tempo' },
  { src: '/imgs/D8CDAAE2-4F9F-45D3-B2CD-AFE7CA28F817.JPG', alt: 'Retrato emocional 4', category: 'emotion', story: 'Histórias contadas através do olhar' },
  { src: '/imgs/d06d3506-bc6a-413f-935f-4c5cefe5ece8.jpeg', alt: 'Retrato mágico 4', category: 'magic', story: 'Beleza encontrada na simplicidade' },
  { src: '/imgs/cc343eab-76d0-48ab-8535-ff02fc15885b.JPG', alt: 'Retrato emocional 5', category: 'emotion', story: 'Emoções que conectam almas' },
  { src: '/imgs/c9c05c14-b644-4869-8bae-51853ee51a9a.jpeg', alt: 'Retrato mágico 5', category: 'magic', story: 'Instantes que merecem ser eternizados' },
  { src: '/imgs/c6ebf1af-efba-4f98-be1d-288ffe5611b5.JPG', alt: 'Retrato emocional 6', category: 'emotion', story: 'Autenticidade em cada frame' },
  { src: '/imgs/b36303d1-5b72-42e2-8dd0-4999e77b8ab8.JPG', alt: 'Retrato mágico 6', category: 'magic', story: 'Poesia visual em movimento' },
  { src: '/imgs/Attachment-1.jpeg', alt: 'Retrato emocional 7', category: 'emotion', story: 'Momentos de pura verdade' },
  { src: '/imgs/98415962-8C42-4A3F-8289-38AF3C6EC623.JPG', alt: 'Retrato mágico 7', category: 'magic', story: 'Arte que toca o coração' },
  { src: '/imgs/97148801-08B9-45C8-AE7F-340F9890E65F.JPG', alt: 'Retrato emocional 8', category: 'emotion', story: 'Retratos que contam histórias' },
  { src: '/imgs/94930da4-18b8-4529-b633-a939c3b2844f.JPG', alt: 'Retrato mágico 8', category: 'magic', story: 'Magia capturada em pixels' },
  { src: '/imgs/028740c5-3dd8-4b72-89d1-eb1a73dbe6b3.jpeg', alt: 'Retrato emocional 9', category: 'emotion', story: 'Expressões que revelam almas' },
  { src: '/imgs/543ADDCC-10E5-438E-AC04-6E188B0F08EF.JPG', alt: 'Retrato mágico 9', category: 'magic', story: 'Beleza em sua forma mais pura' },
  { src: '/imgs/45C002AE-9156-400B-AFE5-0B8E26BC3105.JPG', alt: 'Retrato emocional 10', category: 'emotion', story: 'Momentos de conexão profunda' },
  { src: '/imgs/13d9060d-3fd9-4bd8-aadb-43be69a11704.JPG', alt: 'Retrato mágico 10', category: 'magic', story: 'Luz que revela segredos' },
  { src: '/imgs/6efef47f-f79d-4f6c-a0b4-5a0aeba1a32a.jpeg', alt: 'Retrato emocional 11', category: 'emotion', story: 'Vulnerabilidade como força' },
  { src: '/imgs/5D70F1CA-71C6-46A5-B2D3-972DFD58BBAA.jpeg', alt: 'Retrato mágico 11', category: 'magic', story: 'Instantes de pura magia' },
  { src: '/imgs/2E75A0D6-4CF3-4FEE-AEA5-9F8FD5006A60.JPG', alt: 'Retrato emocional 12', category: 'emotion', story: 'Histórias escritas com luz' },
  { src: '/imgs/0E9689A2-4CA4-4897-87F6-375BE910DAF4.JPG', alt: 'Retrato mágico 12', category: 'magic', story: 'Arte que transcende o comum' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const emotionImages = images.filter(img => img.category === 'emotion');
  const magicImages = images.filter(img => img.category === 'magic');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Magazine Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                  ILUMINA
                </h1>
                <p className="text-lg text-gray-600 font-light">FOTOGRAFIA</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Uma revista visual que celebra a arte da fotografia, 
              capturando momentos que transcendem o tempo e tocam a alma.
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            {['all', 'emotion', 'magic'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'TODAS AS HISTÓRIAS' : category === 'emotion' ? 'EMOÇÕES' : 'MAGIA'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              CAPTURANDO
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EMOÇÃO & MAGIA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cada retrato é uma história, cada momento uma memória eternizada. 
              Descubra a beleza autêntica através das lentes da Ilumina.
            </p>
          </motion.div>

          {/* Featured Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 text-center border border-purple-100"
          >
            <Quote className="w-12 h-12 text-purple-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-gray-800 font-light italic mb-4">
              "A fotografia é a arte de capturar não apenas imagens, 
              mas a essência da alma humana em um único momento."
            </blockquote>
            <p className="text-gray-600 font-medium">— Ilumina Fotografia</p>
          </motion.div>
        </div>
      </section>

      {/* Magazine Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
                  {/* Emotion Section */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-4xl font-bold text-gray-900 mb-4">EMOÇÕES</h3>
                      <p className="text-xl text-gray-600 max-w-3xl">
                        Retratos que capturam a vulnerabilidade humana, revelando 
                        a beleza autêntica de cada expressão e momento.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {emotionImages.slice(0, 6).map((image, index) => (
                        <motion.article
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setSelectedImage(image)}
                          className="group cursor-pointer"
                        >
                          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] relative overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-purple-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver detalhes</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* Magic Section */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-4xl font-bold text-gray-900 mb-4">MAGIA</h3>
                      <p className="text-xl text-gray-600 max-w-3xl">
                        Momentos extraordinários capturados através da luz, 
                        criando imagens que transcendem o comum e tocam o mágico.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {magicImages.slice(0, 6).map((image, index) => (
                        <motion.article
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setSelectedImage(image)}
                          className="group cursor-pointer"
                        >
                          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] relative overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-pink-600">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver magia</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
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
                      {selectedCategory === 'emotion' ? 'EMOÇÕES' : 'MAGIA'}
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl">
                      {selectedCategory === 'emotion' 
                        ? 'Retratos que capturam a vulnerabilidade humana, revelando a beleza autêntica de cada expressão e momento.'
                        : 'Momentos extraordinários capturados através da luz, criando imagens que transcendem o comum e tocam o mágico.'
                      }
                    </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredImages.map((image, index) => (
                      <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedImage(image)}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                          <div className="aspect-[4/5] relative overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                            <div className="flex items-center gap-2 mt-4 text-purple-600">
                              <Eye className="w-4 h-4" />
                              <span className="text-sm font-medium">Ver detalhes</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </motion.article>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedImage.alt}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{selectedImage.story}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedImage.category === 'emotion' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-pink-100 text-pink-800'
                  }`}>
                    {selectedImage.category === 'emotion' ? 'Emoção' : 'Magia'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-lg"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magazine Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">@ilumina.fotografia</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">contato@ilumina.com</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-5 h-5 text-pink-500" />
            <p className="text-gray-300 text-lg font-light">
              Transformando momentos em arte eterna
            </p>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Ilumina Fotografia - Revista Visual • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
