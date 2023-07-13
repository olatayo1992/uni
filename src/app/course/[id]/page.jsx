"use client"
import { tech } from "@/app/page"
import Image from "next/image"

export default function page({params}) {
    const list = tech.find(course => course.name === params.id)


  return (
    <article className="text-left">
        <h1 className="text-center border-b-8 border-sky-700 py-4 uppercase">{list.name}</h1>
        <Image className="m-auto" src={list.image} alt={list.name} width={300} height={300}/>
        <h2 className="py-2 text-2x1"><span className="font-bold">keyword: </span>{list.keywords.join(',')}</h2>
        <p className="py-2 text-2x1">{list.description.sentence1}</p>
        <p className="py-2 text-2x1">{list.description.sentence2}</p>
        <p className="py-2 text-2x1">{list.description.sentence3}</p>
    </article>
  )
}


