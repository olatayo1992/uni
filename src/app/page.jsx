"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export const tech = [
  {
    id: 1,
    name: "Git",
    description: {
      sentence1: "Git is a distributed version control system.",
      sentence2: "It allows multiple developers to collaborate on a project.",
      sentence3: "Git keeps track of changes and allows easy merging of code.",
    },
    keywords: ["Version Control", "Repository", "Branching"],
    image: "/git.png",
    duration: "2 weeks",
  },
  {
    id: 2,
    name: "HTML",
    description: {
      sentence1: "HTML is a markup language used for creating web pages.",
      sentence2: "It provides the structure and content of a web page.",
      sentence3: "HTML elements are used to define different parts of a page.",
    },
    keywords: ["Markup", "Web Development", "Structure"],
    image: "/html.png",
    duration: "1 week",
  },
  {
    id: 3,
    name: "CSS",
    description: {
      sentence1: "CSS is a style sheet language for designing web pages.",
      sentence2: "It controls the visual appearance and layout of elements.",
      sentence3: "CSS enables responsive design and customization of web pages.",
    },
    keywords: ["Styling", "Layout", "Responsive"],
    image: "/css.png",
    duration: "2 weeks",
  },
  {
    id: 4,
    name: "TailwindCSS",
    description: {
      sentence1: "Tailwind CSS is a utility-first CSS framework.",
      sentence2: "It provides pre-defined utility classes for rapid development.",
      sentence3: "Tailwind CSS enables efficient styling and responsive designs.",
    },
    keywords: ["CSS Framework", "Utility Classes", "Responsive Design"],
    image: "/twin.png",
    duration: "1 week",
  },
  {
    id: 5,
    name: "Next.js",
    description: {
      sentence1: "Next.js is a React framework for server-side rendering and static site generation.",
      sentence2: "It allows developers to build fast and SEO-friendly web applications.",
      sentence3: "Next.js simplifies the development process with its built-in features.",
    },
    keywords: ["React", "Server-side Rendering", "Static Site Generation"],
    image: "/next.png",
    duration: "3 weeks",
  },
  {
    id: 6,
    name: "Python",
    description: {
      sentence1: "Python is a high-level programming language known for its simplicity and readability.",
      sentence2: "It supports multiple programming paradigms, including procedural and object-oriented.",
      sentence3: "Python is widely used in areas such as web development, data analysis, and automation.",
    },
    keywords: ["Programming", "Scripting", "Data Analysis"],
    image: "/python.png",
    duration: "4 weeks",
  },
  {
    id: 7,
    name: "Django",
    description: {
      sentence1: "Django is a Python web framework for building robust web applications.",
      sentence2: "It follows the Model-View-Controller (MVC) architectural pattern.",
      sentence3: "Django provides many built-in features for rapid development and scalability.",
    },
    keywords: ["Web Development", "Backend", "MVC"],
    image: "/jgo.png",
    duration: "3 weeks",
  },
  {
    id: 8,
    name: "JavaScript",
    description: {
      sentence1: "JavaScript is a high-level programming language used for front-end and back-end development.",
      sentence2: "It enables interactivity and dynamic behavior on web pages.",
      sentence3: "JavaScript is widely supported and powers a wide range of applications.",
    },
    keywords: ["Scripting", "Web Development", "Interactivity"],
    image: "/javascript.png",
    duration: "2 weeks",
  },
];

export default function page() {
const [item, setItem] = useState('')

const filteredCourse = tech.filter(course => course.name.toLocaleLowerCase().includes(item.toLocaleLowerCase()))

function onChange(e){
  return setItem(e.target.value)
}


  const list = filteredCourse.length> 0 ? filteredCourse.map(course =>
   (
<section key={course.id} className="flex flex-col items-center border-4 border-orange-500 p-4 rounded-x1">
<Link href={`/course/${course.name}`}>
<Image src={course.image} alt={course.name} width={250} height=
{250}/>
<h2><span className="front-bold">course name</span>{course.duration}</h2>
<p><span className="front-bold">course duration:</span>{course.duration}</p>
</Link>
</section>

)):(
  <h2>course does not exist</h2>
)



  return (
    <div>
      <input type="text" name="text" id="text"
      placeholder="search for a course"
      className="w-1/2 m-auto p-4 my-5 outline-none border-sky-600
      border-4 rounded-lg"
      value={item}
      onChange={onChange}/>
<div className="text-[40px] text-center grid md:grid-cols-3 grid-cols-1 gap-2">
  {list}
</div>
</div>
  )
}
