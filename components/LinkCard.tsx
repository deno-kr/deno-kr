/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface LinkCardProps {
  icon: string;
  title: string;
  content: string;
  url: string;
}

export default function LinkCard({ icon, title, content, url }: LinkCardProps) {
  return (
    <a href={url} class={tw`rounded bg-gray-200 h-max p-4 flex flex-col transition-shadow hover:(shadow-xl)`}>
      <header class={tw`flex flex-row justify-start items-center`}>
        <img src={icon} alt="logo" class={tw`w-5 h-5`}/>
        <h2 class={tw`font-bold mx-2`}>{ title }</h2>
      </header>
      <p class={tw`text-blue-400`}>{ content }</p>
    </a>
  )
}
