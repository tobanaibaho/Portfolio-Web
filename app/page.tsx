"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Award,
  Code,
  CodeXml,
  Palette,
  Database,
  ChartNoAxesCombined,
  ServerCog,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("profile")

  // Smooth scroll function with navbar offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })

      setActiveSection(sectionId)
    }
  }

  // Track active section on scroll with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const sections = ["profile", "skills", "projects", "certificates", "contact"]
        const scrollPosition = window.scrollY + 150 // Offset for navbar

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }, 10) // Debounce delay
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: "profile", label: "Profile" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "certificates", label: "Certificates" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-500 relative group px-3 py-2 rounded-md ${
                  activeSection === item.id
                    ? "text-white bg-gray-800/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-500 ${
                    activeSection === item.id ? "w-8" : "group-hover:w-6"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Profile Jumbotron */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <User className="h-20 w-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">PROFILE</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Get to know who I am, my journey, and what drives my passion for creating exceptional digital experiences
          </p>
          <div className="mt-12 animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("profile")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-800 hover:scale-105 hover:text-white transition-all duration-300"
            >
              Explore My Story
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section id="profile" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                  Hi, I'm <span className="text-white">Toba Jordi Naibaho</span>
                </h2>
                <p className="text-2xl text-gray-400 whitespace-nowrap">Web Developer | Software Engineer | Data Enthusiast</p>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 max-w-2xl text-justify">
                Informatics Engineering graduate with experience in software and web development, data analytics, and project management. Passionate about building modern, user-focused solutions using Python, Java, SQL, JavaScript, and Laravel. Proficient in data analysis and visualization with Microsoft Excel and Tableau, combining analytical thinking, creativity, and adaptability to new technologies. Dedicated to continuous learning and delivering impactful, high-quality results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=toba.jordi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>

                <a
                  href="https://github.com/tobanaibaho" // ganti dengan username GitHub kamu
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-black hover:bg-gray-800 hover:text-white gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View GitHub
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-gray-700 shadow=xl">
                  <Image
                    src="/FOTO.png"
                    alt="Alex Johnson - Full Stack Developer"
                    width={360}
                    height={360}
                    className="object-cover relative -top-10"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-black p-3 rounded-full">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Jumbotron */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Code className="h-20 w-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">SKILLS</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            A showcase of the technologies, frameworks, and tools used to craft impactful digital experiences and uncover the stories behind data
          </p>
          <div className="mt-12 animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("skills")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-800 hover:scale-105 hover:text-white transition-all duration-300"
            >
              View My Expertise
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section id="skills" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <Code className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  HTML
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Tailwind CSS
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Vue.js
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  PHP
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Laravel
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  C++
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  MySQL
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <CodeXml className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  PHP
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  C++
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  SQL
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <ChartNoAxesCombined className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Data & Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Microsoft Excel
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Tableau
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Pandas / Numpy
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <ServerCog className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Tools & Environtment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  GitHub
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Visual Studio Code
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  WINDOWS
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  LINUX
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 mx-auto text-white mb-4" />
                <CardTitle className="text-white">Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Fritzing
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Jumbotron */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Briefcase className="h-20 w-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">PROJECTS</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Explore a curated collection of innovative web and data-driven projects — combining creative design, efficient development, and insightful analytics to deliver impactful digital experiences.
          </p>
          <div className="mt-12 animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-800 hover:scale-105 hover:text-white transition-all duration-300"
            >
              See My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gray-800">
                <Image
                  src="/project/Streamlit.png"
                  alt="E-commerce Platform"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Rice Classification Using Naive Bayes</CardTitle>
                <CardDescription className="text-gray-400">
                  This project implements a machine learning approach to classify rice crop quality based on agronomic features, using two methods: Naive Bayes with all features, and Naive Bayes with feature selection using the Chi-Square method.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Streamlit
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tobanaibaho/Klasifikasi-Tanaman-Padi-Menggunakan-Naive-Bayes-dan-Seleksi-Fitur-Chi-Square"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <a
                    href="https://tobanaibaho-rice-classification-project.streamlit.app/"                     
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                  </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gray-800">
                <Image
                  src="/project/filtering_oil.jpg"
                  alt="Task Management App"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Oil Filtering Data</CardTitle>
                <CardDescription className="text-gray-400">
                  Developed a desktop application using PyQt to filter data and monitor the inflow and outflow of oil volume. This project focuses on providing an efficient and user-friendly tool for accurate oil transaction tracking.                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    PyQt
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tobanaibaho/Filtering-Data-With-GUI-Python"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <a
                    href="https://github.com/tobanaibaho/Filtering-Data-With-GUI-Python"                     
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gray-800">
                <Image
                  src="/project/walter_filtering.jpg"
                  alt="Weather Dashboard"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">IoT - Water Filtering</CardTitle>
                <CardDescription className="text-gray-400">
                  Integrated sensor data to monitor water quality and automate filtration processes, enabling real-time monitoring and remote control to improve the efficiency and reliability of the clean water supply system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    C++
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Arduino
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Blynk
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tobanaibaho/IoT-Water-Filtration"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <a
                    href="https://github.com/tobanaibaho/IoT-Water-Filtration"                     
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gray-800">
                <Image
                  src="/project/ARSITEKTUR_FINAL.jpg"
                  alt="Weather Dashboard"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">IoT - Solar Dryer Dome</CardTitle>
                <CardDescription className="text-gray-400">
                  This project implements an IoT-based automatic solar dryer dome using the NodeMCU ESP8266 microcontroller, integrated with Firebase Realtime Database and a Fuzzy Logic Controller "eFLL" to maintain optimal temperature, humidity, and drying performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    C++
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    ESP8266
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Fuzzy
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Firebase
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tobanaibaho/IoT-Solar-Dryer-Dome"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <a
                    href="https://github.com/tobanaibaho/IoT-Solar-Dryer-Dome"                     
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gray-800">
                <Image
                  src="/project/Streamlit.svg"
                  alt="Weather Dashboard"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Sistem Rekomendasi Pariwisata</CardTitle>
                <CardDescription className="text-gray-400">
                  This project is a hotel recommendation system based on Content-Based Filtering, which utilizes user reviews to suggest hotels with similar characteristics. The system is developed using Python and Streamlit, and applies Natural Language Processing (NLP) techniques such as stemming, stopword removal, and TF-IDF vectorization to analyze and compare textual reviews.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Streamlit
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Natural Language Processing (NLP)
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tobanaibaho/Sistem-Rekomendasi-Pariwisata"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <a
                    href="https://github.com/tobanaibaho/Sistem-Rekomendasi-Pariwisata"                     
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:text-white gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Jumbotron */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <GraduationCap className="h-20 w-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">CERTIFICATES</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Certifications and achievements that demonstrate my expertise and commitment to continuous growth
          </p>
          <div className="mt-12 animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("certificates")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-800 hover:scale-105 hover:text-white transition-all duration-300"
            >
              View Credentials
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Content */}
      <section id="certificates" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <img src="certificate/CCNASRWE.jpg" alt="Sertifikat1" />
                <CardTitle className="text-white text-[20px]">CCNA SRWE</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 -mt-2 mb-2">Certified by Cisco</p>
                <p className="text-sm text-gray-500">2024</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <img src="certificate/Dasar-Implementasi-Kecerdasan-Artifisial.jpg" alt="Sertifikat2" />
                <CardTitle className="text-white text-[20px]">Dasar Implementasi Kecerdasan Artifisial</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 -mt-2 mb-2">Certified by Komdigi</p>
                <p className="text-sm text-gray-500">2025</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <img src="certificate/komdigi.jpg" alt="Sertifikat3" />
                <CardTitle className="text-white text-[20px]">Pentingnya Menjaga Keamanan digital</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 -mt-2 mb-2">Certified by Komdigi</p>
                <p className="text-sm text-gray-500">2025</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <img src="certificate/DAMC.jpg" alt="Sertifikat4" />
                <CardTitle className="text-white text-[20px]">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 -mt-2 mb-2">Certified by RevoU</p>
                <p className="text-sm text-gray-500">2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Jumbotron */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <MessageCircle className="h-20 w-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">CONTACT</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Ready to bring your ideas to life? Let's collaborate on building innovative, data-driven, and scalable solutions that make an impact.
          </p>
          <div className="mt-12 animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-800 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact" className="py-20 px-6 bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-1 gap-16 text-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether it's developing efficient software or exploring the power of data, I'm excited to collaborate on projects that make a real impact. Let's turn your vision into reality.
                </p>
              </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-gray-300">toba.jordi@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <span className="text-gray-300">+62 822-7281-6039</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-gray-300">Bekasi, West Java, Indonesia</span>
          </div>
        </div>


      </div>
    </div>

    <div className="mt-20 pt-8 border-t border-gray-800 text-center">
      <p className="text-gray-500">© 2025 Toba Jordi Naibaho. All rights reserved.</p>
    </div>
  </div>
</section>

    </div>
  )
}
