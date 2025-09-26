"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { articlesData } from "../data"
import { notFound } from "next/navigation"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug]

  if (!article) {
    notFound()
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
        
        .article-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #863737;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .article-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #863737;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .article-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          text-align: justify;
        }
        
        .article-content ul, .article-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Article Header */}
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-[#863737]/10 text-[#863737] font-serif">{article.category}</Badge>
            <div className="flex items-center text-sm text-gray-500 font-serif">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-600 font-serif">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-[#863737] text-[#863737] hover:bg-[#863737]/5 font-serif bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Article Body */}
        <div
          className="article-content prose prose-lg max-w-none text-gray-700 font-serif"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Article Tags */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 font-serif">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Back to Articles */}
        <div className="mt-8 md:mt-12 text-center">
          <Link href="/#articles">
            <Button className="bg-[#863737] hover:bg-[#6b2d2d] text-white font-serif">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
