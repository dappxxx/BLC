"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Award, Search, Globe, Building, Menu, X, Calendar, ArrowRight } from "lucide-react"
import { articlesData } from "./articles/data"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const navHeight = 64 // Height of sticky navigation
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false) // Close mobile menu if open
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Updated research areas with category mapping
  const researchAreas = [
    {
      title: "International Trade",
      icon: Globe,
      description: "International trade and regulations",
      category: "International Trade",
    },
    {
      title: "Finance and Banking",
      icon: Building,
      description: "Financial and banking law",
      category: "Finance and Banking",
    },
    {
      title: "Intellectual Property Rights",
      icon: Award,
      description: "Intellectual property rights",
      category: "Intellectual Property Rights",
    },
    {
      title: "Company and Antitrust Competition",
      icon: Scale,
      description: "Corporate and competition law",
      category: "Company and Antitrust Competition",
    },
    {
      title: "Energy and Mineral Resources",
      icon: Building,
      description: "Energy and mineral resources",
      category: "Energy and Mineral Resources",
    },
    {
      title: "Capital Market Law",
      icon: Building,
      description: "Capital market law",
      category: "Capital Market Law",
    },
  ]

  // Get all articles for search functionality
  const allArticles = Object.values(articlesData)

  // Sample articles data for homepage (showing only 6 latest)
  const latestArticles = allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6)

  const filteredArticles = allArticles
    .filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(0, 6) // Show max 6 results on homepage

  // Update the articles mapping to use latestArticles for display when no search
  const articlesToShow = searchQuery ? filteredArticles : latestArticles

  return (
    <div className="min-h-screen bg-white font-serif">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:wght@400;500;600;700;800&display=swap');
        
        .font-serif {
          font-family: 'Crimson Text', serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .text-justify {
          text-align: justify;
          text-justify: inter-word;
        }

        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-logo-float {
          animation: logoFloat 6s ease-in-out infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#863737]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className={`flex items-center space-x-3 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/blc-logo.png"
                  alt="BLC Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-display">BLC UGM</h1>
                <p className="text-xs text-gray-600 font-serif">Business Law Community</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
              <button
                onClick={() => smoothScrollTo("home")}
                className="text-[#863737] font-semibold hover:text-[#6b2d2d] transition-colors font-serif"
              >
                Home
              </button>
              <button
                onClick={() => smoothScrollTo("about")}
                className="text-gray-700 hover:text-[#863737] transition-colors font-serif"
              >
                About
              </button>
              <button
                onClick={() => smoothScrollTo("research")}
                className="text-gray-700 hover:text-[#863737] transition-colors font-serif"
              >
                Research
              </button>
              <button
                onClick={() => smoothScrollTo("articles")}
                className="text-gray-700 hover:text-[#863737] transition-colors font-serif"
              >
                Articles
              </button>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="text-gray-700 hover:text-[#863737] transition-colors font-serif"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#863737]/20 animate-fade-in-up">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => smoothScrollTo("home")}
                  className="text-[#863737] font-semibold py-2 font-serif text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => smoothScrollTo("about")}
                  className="text-gray-700 hover:text-[#863737] py-2 font-serif text-left"
                >
                  About
                </button>
                <button
                  onClick={() => smoothScrollTo("research")}
                  className="text-gray-700 hover:text-[#863737] py-2 font-serif text-left"
                >
                  Research
                </button>
                <button
                  onClick={() => smoothScrollTo("articles")}
                  className="text-gray-700 hover:text-[#863737] py-2 font-serif text-left"
                >
                  Articles
                </button>
                <button
                  onClick={() => smoothScrollTo("contact")}
                  className="text-gray-700 hover:text-[#863737] py-2 font-serif text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#863737]/5 to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            {/* Logo with floating animation */}
            <div className={`mb-8 flex justify-center ${isLoaded ? "animate-fade-in-scale" : "opacity-0"}`}>
              <div className="w-24 h-24 md:w-32 md:h-32 animate-logo-float">
                <Image
                  src="/images/blc-logo.png"
                  alt="BLC Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>

            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-display ${isLoaded ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
            >
              Business Law Community
            </h1>
            <p
              className={`text-lg md:text-xl lg:text-2xl text-[#863737] font-semibold mb-2 md:mb-4 font-display ${isLoaded ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
            >
              Faculty of Law, Universitas Gadjah Mada
            </p>
            <p
              className={`text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 font-serif italic ${isLoaded ? "animate-fade-in-up stagger-3" : "opacity-0"}`}
            >
              "Legal Excellence, Business Intelligent"
            </p>
          </div>

          <div className={`relative ${isLoaded ? "animate-fade-in-scale stagger-5" : "opacity-0"}`}>
            <Image
              src="/images/hero-group.jpg"
              alt="BLC UGM Members"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Foto - tampil pertama di mobile, kedua di desktop */}
            <div className="order-1 md:order-1 md:col-span-2 animate-fade-in-up">
              <Image
                src="/images/leader.jpg"
                alt="President Director BLC UGM"
                width={400}
                height={500}
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-xl md:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Teks - tampil kedua di mobile, kedua di desktop */}
            <div className="order-2 md:order-2 md:col-span-3 animate-fade-in-up stagger-2">
              <Badge className="bg-[#863737]/10 text-[#863737] mb-4 font-serif font-semibold">
                President Director's Remarks
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#863737] mb-4 md:mb-6 font-display">
                Welcome to Business Law Community
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base font-serif">
                <p className="text-justify">
                  As the President Director, I am honored to lead this organization, which aims to be a forum for the
                  Faculty of Law UGM and are interested in exploring business law. Our commitment extends beyond
                  academic excellence to fostering practical understanding of contemporary legal challenges.
                </p>
                <p className="text-justify">
                  The Business Law Community (BLC) is here with a mission to become a forum for the development of
                  knowledge, skills, and networks in the field of business law for students and the academic community.
                  We strive to bridge the gap between theoretical knowledge and practical application in the
                  ever-evolving landscape of business law.
                </p>
                <p className="text-justify">
                  We believe that a strong and comprehensive business law framework is essential for creating a healthy
                  and sustainable business environment. Therefore, through various activities and programs, we are
                  committed to contributing to the practical studies of business law while upholding the highest
                  standards of integrity and professionalism.
                </p>
              </div>
              <div className="mt-6 md:mt-8 font-serif">
                <p className="font-semibold text-gray-900">Best regards,</p>
                <p className="text-[#863737] font-semibold text-lg">President Director</p>
                <p className="text-gray-600 text-sm italic">
                  Business Law Community Faculty of Law, Universitas Gadjah Mada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#863737] mb-4 md:mb-6 font-display">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-serif text-center">
              The Business Law Community is a student organization dedicated to developing a deep understanding of
              business law and best practices in the industry, with a commitment to academic excellence and
              professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-[#863737]/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-1">
              <CardHeader>
                <Users className="w-10 md:w-12 h-10 md:h-12 text-[#863737] mb-4" />
                <CardTitle className="text-lg md:text-xl text-[#863737] font-display font-bold">
                  ▼ WHAT IS BLC?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm md:text-base font-serif text-justify leading-relaxed">
                  Business Law Community Faculty of Law Universitas Gadjah Mada (BLC FH UGM) is an independent
                  scientific community and open to all undergraduate law students in UGM. BLC FH UGM was established on
                  10 September 2009 and officially established on 30 June 2010. On the first establishment, this
                  community known as Legisperitus Business Law Society (BLS) was founded by Inda Rahadiyan, Miranti
                  Putri Prihantika, Reina Hakim Horonima, and Deby Ferina.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#863737]/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-2">
              <CardHeader>
                <BookOpen className="w-10 md:w-12 h-10 md:h-12 text-[#863737] mb-4" />
                <CardTitle className="text-lg md:text-xl text-[#863737] font-display font-bold">
                  ▼ OUR VISION FORWARD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm md:text-base font-serif text-justify leading-relaxed">
                  As the time goes by, BLC FH UGM has become the community for law students at UGM to study, discuss,
                  and share knowledge about business law. We are actively delivering our interest and broadening our
                  knowledge for issues and problems about business law with integrity, intellectuality, morality,
                  professionalism, and responsibility, as well as the vision above.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#863737]/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-3">
              <CardHeader>
                <Award className="w-10 md:w-12 h-10 md:h-12 text-[#863737] mb-4" />
                <CardTitle className="text-lg md:text-xl text-[#863737] font-display font-bold">
                  ▼ OUR COMMITMENT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm md:text-base font-serif text-justify leading-relaxed">
                  Goes with <em>'leges sine moribus vanae'</em> as our motto, which means{" "}
                  <em>'law without morals is unworthy,'</em> BLC FH UGM actively commits to conducting scientific
                  discussions and participating in and conducting business law competitions on a national and
                  international scale, such as contract drafting and legal opinion. We are also committed to developing
                  organizational skills for the fellows through a number of working programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas - Now clickable */}
      <section id="research" className="py-12 md:py-20 bg-[#863737]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-display">
              Research Area
            </h2>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto font-serif">
              Main research areas that become the focus of Business Law Community in developing expertise and academic
              contributions in various aspects of business law
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {researchAreas.map((area, index) => (
              <Link key={index} href={`/articles?category=${encodeURIComponent(area.category)}`}>
                <Card
                  className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-${index + 1} cursor-pointer`}
                >
                  <CardHeader>
                    <area.icon className="w-10 md:w-12 h-10 md:h-12 text-white mb-4" />
                    <CardTitle className="text-base md:text-lg text-white font-display font-semibold">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-100 text-sm md:text-base font-serif">{area.description}</p>
                    <p className="text-red-200 text-xs mt-2 font-serif italic">Click to view related articles</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section id="articles" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#863737] mb-4 md:mb-6 font-display">
              Latest Articles
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 font-serif">
              Latest articles and research from Business Law Community that reflect the depth of analysis and
              intellectual contributions in the field of business law
            </p>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-[#863737]/20 focus:border-[#863737] focus:ring-[#863737] transition-all duration-300 font-serif"
              />
            </div>
          </div>

          <div className="grid gap-6 md:gap-8">
            {articlesToShow.map((article, index) => (
              <Card
                key={article.id}
                className={`border-[#863737]/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up stagger-${index + 1}`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-[#863737]/10 text-[#863737] text-xs font-serif">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500 font-serif">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <Link href={`/articles/${article.id}`}>
                        <CardTitle className="text-lg md:text-xl text-gray-900 hover:text-[#863737] cursor-pointer leading-tight transition-colors duration-300 font-serif font-bold mb-2">
                          {article.title}
                        </CardTitle>
                      </Link>
                      <p className="text-gray-600 text-sm md:text-base font-serif mb-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 font-serif">
                          <span>By {article.author}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <Link href={`/articles/${article.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#863737] hover:text-[#6b2d2d] hover:bg-[#863737]/5 font-serif"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {articlesToShow.length === 0 && (
            <div className="text-center py-8 animate-fade-in-up">
              <p className="text-gray-500 font-serif">No articles found.</p>
            </div>
          )}

          <div className="text-center mt-8 md:mt-12 animate-fade-in-up">
            <Link href="/articles">
              <Button className="bg-[#863737] hover:bg-[#6b2d2d] text-white hover:scale-105 transition-all duration-300 font-serif font-semibold">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-fade-in-up stagger-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/blc-logo.png"
                    alt="BLC Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">BLC UGM</h3>
                  <p className="text-sm text-gray-400 font-serif">Business Law Community</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-serif">Faculty of Law, Universitas Gadjah Mada</p>
              <p className="text-gray-500 text-xs mt-2 font-serif italic">"Leges Sine Moribus Vanae"</p>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base font-serif">
                <li>
                  <button onClick={() => smoothScrollTo("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("research")} className="hover:text-white transition-colors">
                    Research Area
                  </button>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    All Articles
                  </Link>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up stagger-3">
              <h4 className="text-lg font-semibold mb-4 font-display">Contact Info</h4>
              <div className="space-y-2 text-gray-400 text-sm md:text-base font-serif">
                <p>Faculty of Law UGM</p>
                <p>Yogyakarta, Indonesia</p>
                <p>Email: blc@ugm.ac.id</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm animate-fade-in-up stagger-4 font-serif">
            <p>&copy; 2025 Business Law Community - Universitas Gadjah Mada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
