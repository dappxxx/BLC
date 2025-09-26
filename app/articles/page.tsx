"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { articlesData } from "./data"

const ARTICLES_PER_PAGE = 6

export default function ArticlesPage({ searchParams }: { searchParams: { category?: string; page?: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get category from URL params
  useEffect(() => {
    if (searchParams.category) {
      setSelectedCategory(searchParams.category)
    }
    if (searchParams.page) {
      setCurrentPage(Number.parseInt(searchParams.page) || 1)
    }
  }, [searchParams])

  // Convert articles data to array
  const articlesArray = Object.values(articlesData)

  // Filter articles based on search and category
  const filteredArticles = articlesArray.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory ? article.category === selectedCategory : true

    return matchesSearch && matchesCategory
  })

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  // Get unique categories based on 6 research areas
  const categories = [
    "International Trade",
    "Finance and Banking",
    "Intellectual Property Rights",
    "Company and Antitrust Competition",
    "Energy and Mineral Resources",
    "Capital Market Law",
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const clearFilters = () => {
    setSelectedCategory(null)
    setSearchQuery("")
    setCurrentPage(1)
  }

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
      `}</style>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#863737]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
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

            <Link href="/">
              <Button variant="ghost" className="font-serif">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Articles Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#863737] mb-4 md:mb-6 font-display">
              All Articles
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-serif">
              Explore our comprehensive collection of business law articles and research
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              {/* Search Box */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-[#863737]/20 focus:border-[#863737] focus:ring-[#863737] transition-all duration-300 font-serif"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={`font-serif ${
                    selectedCategory === null
                      ? "bg-[#863737] hover:bg-[#6b2d2d] text-white"
                      : "border-[#863737] text-[#863737] hover:bg-[#863737]/5"
                  }`}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`font-serif text-xs md:text-sm ${
                      selectedCategory === category
                        ? "bg-[#863737] hover:bg-[#6b2d2d] text-white"
                        : "border-[#863737] text-[#863737] hover:bg-[#863737]/5"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory || searchQuery) && (
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm text-gray-600 font-serif">Active filters:</span>
                {selectedCategory && (
                  <Badge className="bg-[#863737]/10 text-[#863737] font-serif">Category: {selectedCategory}</Badge>
                )}
                {searchQuery && (
                  <Badge className="bg-[#863737]/10 text-[#863737] font-serif">Search: {searchQuery}</Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-[#863737] font-serif">
                  Clear All
                </Button>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-gray-600 font-serif">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length}{" "}
              articles
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:gap-8 mb-12">
            {currentArticles.map((article, index) => (
              <Card
                key={article.id}
                className="border-[#863737]/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-serif text-lg mb-4">No articles found.</p>
              <Button onClick={clearFilters} className="bg-[#863737] hover:bg-[#6b2d2d] text-white font-serif">
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-[#863737] text-[#863737] hover:bg-[#863737]/5 font-serif"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 font-serif ${
                      currentPage === page
                        ? "bg-[#863737] hover:bg-[#6b2d2d] text-white"
                        : "border-[#863737] text-[#863737] hover:bg-[#863737]/5"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-[#863737] text-[#863737] hover:bg-[#863737]/5 font-serif"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
