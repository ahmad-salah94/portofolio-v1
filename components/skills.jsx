"use client"

import { useRef, useEffect, useState } from "react"
import {
  FaPython,
  FaDocker,
  FaAws,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa"
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"

export default function Skills() {
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
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "Python", icon: <FaPython className="text-[#3776AB]" size={36} /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" size={36} /> },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-[#326CE5]" size={36} />,
    },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" size={36} /> },
    {
      name: "Terraform",
      icon: <SiTerraform className="text-[#623CE4]" size={36} />,
    },
    { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" size={36} /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={36} /> },
    {
      name: "Github",
      icon: <FaGithub className="text-[#181717] dark:text-white" size={36} />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="text-[#EE4C2C]" size={36} />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-[#FF6F00]" size={36} />,
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn className="text-[#F7931E]" size={36} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#336791]" size={36} />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={36} /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" size={36} /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-[#000000] dark:text-white" size={36} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" size={36} />,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">My Skills</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:shadow-xl"
              >
                {skill.icon}
                <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

