/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Links = [
  {
    name: "Source",
    url: "https://github.com/deno-kr/deno-kr"
  }
]

export default function Footer() {
  return (
    <footer class={tw`border(t-2 gray-200) bg-gray-100 h-32 flex flex-col gap-4 justify-center`}>
      <div class={tw`mx-auto max-w-screen-lg flex items-center justify-center gap-8`}>
        { Links.map((it) => (
          <a href={it.url} class={tw`text-gray-600 hover:underline`}>
            {it.name}
          </a>
        )) }
      </div>
      <div class={tw`text(gray-600 center)`}>
        <span>© {new Date().getFullYear()} Deno Korea</span>
      </div>
    </footer>
  )
}
