"use client"

import { useState, useEffect } from "react"
import { Playfair_Display, Inter } from "next/font/google"
import { ChevronRight, Users, Target, TrendingUp, Award, ArrowRight, Star, Menu, X } from "lucide-react"
import { AuviaLogo } from "@/components/auvia-logo"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function AuviaGroupLanding() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCTAClick = () => {
    window.open(
      "https://wa.me/5511972387106?text=Olá! Gostaria de conhecer os serviços premium da Auvia Group.",
      "_blank",
    )
  }

  const services = [
    {
      id: "sdrs",
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "SDRs de Elite",
      description:
        "Equipes de pré-venda altamente qualificadas, treinadas com metodologia proprietária para maximizar conversões.",
      gradient: "from-[#D4AF37]/20 to-[#0D2B3E]/20",
    },
    {
      id: "training",
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Treinamento Executivo",
      description:
        "Capacitação estratégica para times comerciais com foco em alta performance e resultados mensuráveis.",
      gradient: "from-[#0D2B3E]/20 to-[#D4AF37]/20",
    },
    {
      id: "consulting",
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Consultoria Estratégica",
      description: "Reestruturação completa de operações comerciais com metodologias comprovadas no mercado premium.",
      gradient: "from-[#D4AF37]/20 to-[#0D2B3E]/20",
    },
    {
      id: "management",
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Gestão de Performance",
      description: "Monitoramento contínuo com KPIs avançados e otimização baseada em dados de mercado.",
      gradient: "from-[#0D2B3E]/20 to-[#D4AF37]/20",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const testimonials = [
    {
      stars: 5,
      text: "A Auvia Group revolucionou nossa operação comercial. Em 6 meses, triplicamos nossa receita com uma equipe 40% menor. Profissionalismo excepcional.",
      author: "Carlos Eduardo Silva",
      position: "CEO",
      company: "TechCorp Brasil",
      result: "+300% receita",
    },
    {
      stars: 5,
      text: "Metodologia impecável e resultados imediatos. A consultoria estratégica da Auvia transformou completamente nossa abordagem de mercado.",
      author: "Marina Santos",
      position: "Diretora Comercial",
      company: "GlobalSales International",
      result: "+180% conversões",
    },
    {
      stars: 5,
      text: "Em apenas 3 meses, nossa equipe de SDRs passou de 15% para 85% de taxa de conversão. O treinamento da Auvia é simplesmente extraordinário.",
      author: "Roberto Mendes",
      position: "VP de Vendas",
      company: "InnovaTech Solutions",
      result: "+470% conversões SDR",
    },
    {
      stars: 5,
      text: "Nunca vi uma consultoria tão focada em resultados. Eles não apenas entregaram o que prometeram, superaram todas as expectativas.",
      author: "Ana Paula Costa",
      position: "Diretora Executiva",
      company: "Premium Services Ltd",
      result: "+250% produtividade",
    },
    {
      stars: 5,
      text: "A Auvia Group nos ajudou a estruturar uma operação de vendas de classe mundial. Hoje somos referência no nosso segmento.",
      author: "Fernando Oliveira",
      position: "Founder & CEO",
      company: "ScaleUp Ventures",
      result: "+400% crescimento",
    },
    {
      stars: 5,
      text: "Implementação rápida, resultados consistentes e suporte excepcional. A parceria com a Auvia foi um divisor de águas para nossa empresa.",
      author: "Juliana Rodrigues",
      position: "Chief Revenue Officer",
      company: "Enterprise Solutions",
      result: "+320% receita anual",
    },
  ]

  const totalSlides = testimonials.length

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1) // Mobile: 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2) // Tablet: 2 slides
      } else {
        setSlidesToShow(2) // Desktop: 2 slides
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)

    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.ceil(totalSlides / slidesToShow) - 1
        return prev >= maxSlide ? 0 : prev + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides, slidesToShow])

  const maxSlides = Math.ceil(totalSlides / slidesToShow)

  return (
    <div className={`${playfairDisplay.variable} ${inter.variable} bg-gray-900 text-white min-h-screen`}>
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 md:hidden">
        <div className="flex items-center justify-end px-4 py-3">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#D4AF37] p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black px-6 py-3 font-inter font-bold text-sm rounded-lg"
              >
                Consultoria Gratuita
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#0D2B3E]" />

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#0D2B3E]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-[#D4AF37]/5 to-transparent rounded-full" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
              backgroundSize: "30px 30px sm:50px sm:50px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Logo - Hidden on mobile */}
          <div className="mb-12 sm:mb-16 animate-fade-in justify-center hidden sm:flex">
            <AuviaLogo size="xl" variant="default" />
          </div>

          {/* Company Name - Only visible on mobile */}
          <div className="sm:hidden mb-8 animate-fade-in">
            <h1 className="font-playfair text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8941F] tracking-[0.2em]">
              AUVIA GROUP
            </h1>
            <div className="flex items-center justify-center mt-3 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-16" />
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full mx-3" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-16" />
            </div>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight max-w-6xl mx-auto px-2">
            Estrutura Comercial de Alta Performance para o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
              Mercado Digital
            </span>
          </h2>

          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed px-2">
            Transformamos operações de vendas com metodologia proprietária, equipes de elite e gestão estratégica focada
            em resultados excepcionais.
          </p>

          <button
            onClick={handleCTAClick}
            className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 font-inter font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 rounded-lg w-full sm:w-auto"
            onMouseEnter={() => setIsHovered("cta-main")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span className="relative z-10 flex items-center justify-center">
              <span className="hidden sm:inline">Agendar Consultoria Executiva</span>
              <span className="sm:hidden">Consultoria Executiva</span>
              <ChevronRight
                className={`ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${isHovered === "cta-main" ? "translate-x-1" : ""}`}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8941F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Conglomerado Premium
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
            Excelência{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
              Comercial
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-8 sm:mb-12" />

          <p className="font-inter text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            A Auvia Group é um conglomerado empresarial especializado em soluções comerciais premium. Atendemos empresas
            de médio e grande porte com metodologia proprietária, tecnologia avançada e profissionais de elite.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center group-hover:transform group-hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-[#D4AF37] mb-3 group-hover:text-[#F4D03F] transition-colors duration-300">
                  Presença
                </div>
                <p className="font-inter text-sm sm:text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Alcance estratégico
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Mercado nacional</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Grandes centros</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Atendimento remoto</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center group-hover:transform group-hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-[#D4AF37] mb-3 group-hover:text-[#F4D03F] transition-colors duration-300">
                  Inovação
                </div>
                <p className="font-inter text-sm sm:text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Tecnologia avançada
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>IA & Automação</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>CRM proprietário</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Analytics avançado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center group-hover:transform group-hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-[#D4AF37] mb-3 group-hover:text-[#F4D03F] transition-colors duration-300">
                  Elite
                </div>
                <p className="font-inter text-sm sm:text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Profissionais premium
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Top 1% do mercado</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Certificações internacionais</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                    <span>Treinamento contínuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-[#0D2B3E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Soluções Exclusivas
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Metodologias{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
                Premium
              </span>
            </h2>

            <p className="font-inter text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções desenvolvidas exclusivamente para empresas que buscam excelência operacional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-500 cursor-pointer transform hover:scale-105`}
                onMouseEnter={() => setIsHovered(service.id)}
                onMouseLeave={() => setIsHovered(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div
                    className={`text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="font-inter text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-inter text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0D2B3E] to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Performance Comprovada
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
            Resultados de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">Elite</span>
          </h2>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12 sm:mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {[
              { number: "99.2%", label: "Taxa de satisfação dos clientes" },
              { number: "+127%", label: "Aumento médio em conversões" },
              { number: "12h", label: "Tempo médio de implementação" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mb-3 sm:mb-4">
                    {stat.number}
                  </div>
                  <p className="font-inter text-sm sm:text-base md:text-lg text-gray-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl" />
            <blockquote className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#D4AF37]/30 p-6 sm:p-8 rounded-2xl">
              <div className="text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-3 sm:mb-4 opacity-50">"</div>
              <p className="font-inter text-lg sm:text-xl md:text-2xl italic text-gray-200 leading-relaxed">
                Nossos clientes não apenas ficam satisfeitos - eles se tornam verdadeiros defensores da marca. Uma taxa
                de satisfação de 99.2% não é coincidência, é o resultado de excelência operacional consistente.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Reconhecimento de Mercado
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Excelência{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
                Reconhecida
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                metric: "100+",
                label: "Empresas Atendidas",
              },
              {
                metric: "R$ 1M",
                label: "Em Vendas Geradas",
              },
              {
                metric: "98%",
                label: "Taxa de Retenção",
              },
              {
                metric: "4.9/5",
                label: "Avaliação NPS",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-[#0D2B3E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center">
                  <div className="text-3xl sm:text-4xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mb-2">
                    {item.metric}
                  </div>
                  <h3 className="font-inter text-base sm:text-lg font-bold text-white mb-2">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 sm:mt-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#0D2B3E]/10 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#D4AF37]/30 p-6 sm:p-8 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full mb-6">
                  <Award className="w-8 h-8 text-black" />
                </div>

                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
                  Garantia de Satisfação Total
                </h3>

                <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  Estamos tão confiantes em nossa metodologia que oferecemos garantia de 90 dias. Se você não ficar
                  completamente satisfeito com os resultados, devolvemos 100% do investimento.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#D4AF37]">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    <span>Garantia de 90 dias</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    <span>Suporte 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    <span>Resultados mensuráveis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Cases de Sucesso
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Transformações{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
                Comprovadas
              </span>
            </h2>

            <p className="font-inter text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Mais de 100 empresas já transformaram suas operações comerciais conosco
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                  width: `${(totalSlides / slidesToShow) * 100}%`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`flex-shrink-0 px-2 ${slidesToShow === 1 ? "w-full" : "w-1/2"}`}>
                    <div className="relative group h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-[#0D2B3E]/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                      <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-300 h-full flex flex-col min-h-[300px] sm:min-h-[320px]">
                        {/* Stars */}
                        <div className="flex text-[#D4AF37] text-sm sm:text-base mb-3 sm:mb-4">
                          {Array.from({ length: testimonial.stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-inter text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 italic leading-relaxed flex-grow">
                          "{testimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="border-t border-gray-700 pt-3 sm:pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="font-inter font-bold text-[#D4AF37] text-xs sm:text-sm truncate">
                                {testimonial.author}
                              </div>
                              <div className="font-inter text-gray-400 text-xs truncate">{testimonial.position}</div>
                              <div className="font-inter text-gray-400 text-xs truncate">{testimonial.company}</div>
                            </div>
                            <div className="text-right ml-2">
                              <div className="font-inter font-bold text-[#D4AF37] text-xs sm:text-sm whitespace-nowrap">
                                {testimonial.result}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#D4AF37] scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlides - 1))}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % maxSlides)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 text-[#D4AF37] p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-inter font-bold text-[#D4AF37] mb-1">100+</div>
              <p className="font-inter text-sm text-gray-400">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-inter font-bold text-[#D4AF37] mb-1">99.2%</div>
              <p className="font-inter text-sm text-gray-400">Taxa de Satisfação</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-inter font-bold text-[#D4AF37] mb-1">+280%</div>
              <p className="font-inter text-sm text-gray-400">Crescimento Médio</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-inter font-bold text-[#D4AF37] mb-1">15</div>
              <p className="font-inter text-sm text-gray-400">Países Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-[#0D2B3E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#D4AF37]/10 text-[#D4AF37] px-4 sm:px-6 py-2 rounded-full font-inter font-semibold mb-6 sm:mb-8 text-sm sm:text-base">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Metodologia Exclusiva
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Processo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
                Proprietário
              </span>
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Estratégico",
                description:
                  "Análise profunda da operação atual, identificação de gaps e mapeamento de oportunidades com metodologia proprietária.",
              },
              {
                step: "02",
                title: "Estruturação de Elite",
                description:
                  "Recrutamento e seleção de profissionais de alto padrão, alinhados com a cultura e objetivos da empresa.",
              },
              {
                step: "03",
                title: "Treinamento Avançado",
                description:
                  "Capacitação intensiva com metodologias exclusivas, técnicas de vendas premium e gestão de objeções sofisticadas.",
              },
              {
                step: "04",
                title: "Execução e Otimização",
                description:
                  "Implementação controlada com monitoramento em tempo real, ajustes estratégicos e relatórios executivos detalhados.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-[#0D2B3E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-inter font-bold text-lg sm:text-xl">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-inter text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0D2B3E] to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0D2B3E]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white">
            Eleve sua Operação ao{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
              Próximo Nível
            </span>
          </h2>

          <p className="font-inter text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agende uma consultoria executiva gratuita e descubra como a metodologia Auvia Group pode transformar seus
            resultados comerciais.
          </p>

          <div className="space-y-4 sm:space-y-6">
            <button
              onClick={handleCTAClick}
              className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-inter font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 rounded-lg w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="hidden sm:inline">Consultoria Executiva Gratuita</span>
                <span className="sm:hidden">Consultoria Gratuita</span>
                <ChevronRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8941F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <p className="font-inter text-xs sm:text-sm text-gray-400">
              Atendimento exclusivo para empresas de médio e grande porte
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <AuviaLogo size="md" variant="default" className="mx-auto" />
          </div>
          <p className="font-inter text-xs sm:text-sm text-gray-500">
            © 2024 Auvia Group. Todos os direitos reservados. | Excelência • Inovação • Resultados
          </p>
        </div>
      </footer>
    </div>
  )
}
