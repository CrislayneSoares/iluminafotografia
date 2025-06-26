'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Instagram, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";

const images = [
  { src: '/imgs/imagem1.jpeg', alt: 'Campos dourados ao entardecer', category: 'landscape', story: 'Campos dourados ao entardecer' },
  { src: '/imgs/imagem2.jpeg', alt: 'Paisagem serena', category: 'landscape', story: 'Paisagem serena' },
  { src: '/imgs/imagem3.jpeg', alt: 'Horizonte dourado', category: 'landscape', story: 'Horizonte dourado' },
  { src: '/imgs/imagem4.jpeg', alt: 'No abraço do horizonte', category: 'nature', story: 'No abraço do horizonte, o campo sonha com o céu' },
  { src: '/imgs/imagem5.jpeg', alt: 'Campo e céu', category: 'nature', story: 'Campo e céu' },
  { src: '/imgs/imagem6.jpeg', alt: 'Sonho do campo', category: 'nature', story: 'Sonho do campo' },
  { src: '/imgs/imagem7.jpeg', alt: 'O sol também sabe acariciar', category: 'light', story: 'O sol também sabe acariciar' },
  { src: '/imgs/imagem8.jpeg', alt: 'Carícia do sol', category: 'light', story: 'Carícia do sol' },
  { src: '/imgs/imagem9.jpg', alt: 'Fotografia com alma', category: 'art', story: 'É fotografia, sim. Mas quando feita com alma, torna-se arte' },
  { src: '/imgs/imagem10.JPG', alt: 'Poesia entre pedras', category: 'art', story: 'A fotografia autoral, revela a poesia escondida entre as pedras e os passos' },
  { src: '/imgs/imagem11.jpeg', alt: 'Arte revelada', category: 'art', story: 'A arte revela o que vive dentro de quem olha' },
  { src: '/imgs/imagem12.JPG', alt: 'Contemplação', category: 'art', story: 'Contemplação' },
  { src: '/imgs/imagem13.JPG', alt: 'Revelação interior', category: 'art', story: 'Revelação interior' },
  { src: '/imgs/imagem14.JPG', alt: 'Beleza das estações', category: 'seasons', story: 'Beleza nas marcas das estações do tempo' },
  { src: '/imgs/imagem15.JPG', alt: 'Marcas do tempo', category: 'seasons', story: 'Marcas do tempo' },
  { src: '/imgs/imagem16.JPG', alt: 'Estações', category: 'seasons', story: 'Estações' },
  { src: '/imgs/imagem17.JPG', alt: 'Tempo e beleza', category: 'seasons', story: 'Tempo e beleza' },
  { src: '/imgs/imagem19.JPG', alt: 'Paisagem contemplativa', category: 'landscape', story: 'Paisagem contemplativa' },
  { src: '/imgs/imagem20.JPG', alt: 'Horizonte sereno', category: 'landscape', story: 'Horizonte sereno' },
  { src: '/imgs/imagem21.JPG', alt: 'Campo em paz', category: 'landscape', story: 'Campo em paz' },
  { src: '/imgs/imagem22.JPG', alt: 'Estação dourada', category: 'seasons', story: 'Estação dourada' },
  { src: '/imgs/imagem23.JPG', alt: 'Tempo em cores', category: 'seasons', story: 'Tempo em cores' },
  { src: '/imgs/imagem24.JPG', alt: 'Beleza temporal', category: 'seasons', story: 'Beleza temporal' },
  { src: '/imgs/imagem25.jpeg', alt: 'Última contemplação', category: 'landscape', story: 'Última contemplação' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const landscapeImages = images.filter(img => img.category === 'landscape');
  const natureImages = images.filter(img => img.category === 'nature');
  const lightImages = images.filter(img => img.category === 'light');
  const artImages = images.filter(img => img.category === 'art');
  const seasonsImages = images.filter(img => img.category === 'seasons');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Magazine Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-3 sm:gap-4 mb-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                  ILUMINA
                </h1>
                <p className="text-sm sm:text-lg text-gray-600 font-light">FOTOGRAFIA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8">
            {['all', 'landscape', 'nature', 'light', 'art', 'seasons'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'TODAS' : category === 'landscape' ? 'PAISAGENS' : category === 'nature' ? 'NATUREZA' : category === 'light' ? 'LUZ' : category === 'art' ? 'ARTE' : 'ESTAÇÕES'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-4 sm:mb-6">
              ILUMINA
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FOTOGRAFIA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Explorar Galeria
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
              Sobre Nós
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              APRESENTAÇÃO
            </h2>
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
                São fotografias autorais feitas com delicadeza, capazes de atravessar a correria do mundo e alcançar 
                um lugar íntimo e sereno dentro de cada um de nós.
              </p>
              <p>
                Aqui, não se vende apenas imagens oferece-se leveza, respiro e conexão com o que há de mais simples e essencial.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              GALERIA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra imagens que acalmam, emocionam e iluminam. Cada fotografia é um convite à contemplação.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8">
              {['all', 'landscape', 'nature', 'light', 'art', 'seasons'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category === 'all' ? 'TODAS' : category === 'landscape' ? 'PAISAGENS' : category === 'nature' ? 'NATUREZA' : category === 'light' ? 'LUZ' : category === 'art' ? 'ARTE' : 'ESTAÇÕES'}
                </button>
              ))}
            </div>
          </div>

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
                  {/* Campos dourados ao entardecer */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">CAMPOS DOURADOS AO ENTARDECER</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Paisagens que capturam a beleza dourada do entardecer nos campos.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {landscapeImages.slice(0, 3).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
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

                  {/* No abraço do horizonte */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">NO ABRAÇO DO HORIZONTE, O CAMPO SONHA COM O CÉU</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Momentos onde o campo e o céu se encontram em harmonia perfeita.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {natureImages.slice(0, 3).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-green-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver natureza</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* O sol também sabe acariciar */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">O SOL TAMBÉM SABE ACARICIAR</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Luz suave que acaricia e transforma paisagens em poesia visual.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {lightImages.slice(0, 2).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-yellow-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver luz</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* É fotografia, sim. Mas quando feita com alma, torna-se arte */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">É FOTOGRAFIA, SIM. MAS QUANDO FEITA COM ALMA, TORNA-SE ARTE</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        A fotografia autoral revela a poesia escondida entre as pedras e os passos.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {artImages.slice(0, 3).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-green-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver arte</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* A arte revela o que vive dentro de quem olha */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">A ARTE REVELA O QUE VIVE DENTRO DE QUEM OLHA</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        Imagens que convidam à contemplação e revelam a beleza interior.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {artImages.slice(3, 6).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-green-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver arte</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* Beleza nas marcas das estações do tempo */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-12"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">BELEZA NAS MARCAS DAS ESTAÇÕES DO TEMPO</h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        A poesia das estações capturada em cada momento.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {seasonsImages.slice(0, 3).map((image, index) => (
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
                              <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={400}
                                height={500}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{image.alt}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{image.story}</p>
                              <div className="flex items-center gap-2 mt-4 text-blue-600">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Ver estações</span>
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
                      {selectedCategory === 'landscape' ? 'PAISAJES' : selectedCategory === 'nature' ? 'NATUREZA' : selectedCategory === 'light' ? 'LUZ' : selectedCategory === 'art' ? 'ARTE' : 'ESTAÇÕES'}
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl">
                      {selectedCategory === 'landscape' 
                        ? 'Retratos que capturam a beleza natural e a harmonia das paisagens.'
                        : selectedCategory === 'nature' 
                          ? 'Retratos que capturam a beleza natural e a harmonia das paisagens.'
                          : selectedCategory === 'light' 
                            ? 'Retratos que capturam a beleza natural e a harmonia das paisagens.'
                            : selectedCategory === 'art' 
                              ? 'Retratos que capturam a beleza natural e a harmonia das paisagens.'
                              : 'Retratos que capturam a beleza natural e a harmonia das paisagens.'
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
                            <Image
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              width={400}
                              height={500}
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
                width={800}
                height={1000}
              />
              <div className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedImage.alt}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{selectedImage.story}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedImage.category === 'landscape' 
                      ? 'bg-purple-100 text-purple-800' 
                      : selectedImage.category === 'nature' 
                        ? 'bg-pink-100 text-pink-800'
                        : selectedImage.category === 'light' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : selectedImage.category === 'art' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedImage.category === 'landscape' ? 'Paisagem' : selectedImage.category === 'nature' ? 'Natureza' : selectedImage.category === 'light' ? 'Luz' : selectedImage.category === 'art' ? 'Arte' : 'Estação'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-lg text-lg sm:text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magazine Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">@iluminafotografia_</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">iluminafotografia4@gmail.com</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <p className="text-gray-300 text-base sm:text-lg font-light max-w-4xl">
              Ilumina Fotografia, onde cada imagem é um silêncio que toca, uma luz que revela o que o mundo apressado não nos permite ver!
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Ilumina Fotografia - Galeria Visual • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
