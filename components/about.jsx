"use client"

import { useRef, useEffect, useState } from "react"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-wider text-purple-500 mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              MLOps Engineer & Computer Science Expert
            </h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
            From a refugee to an MLOps Engineer in Germany, my journey is one of resilience and dedication. I specialize in optimizing machine learning model lifecycles through automation, transforming monolithic systems into scalable solutions. My passion for technology is matched by my commitment to continuous learning and inspiring others to pursue their dreams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">Reutlingen, Germany</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <Mail className="text-purple-500" size={24} />
              <span className="text-gray-300">ahmad.salah@example.com</span>
            </div>
          </div>

          <div className="text-center">
            <Link href="#contact" passHref>
              <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

