import Link from "next/link";
import ProjectsContainer from "./components/ProjectsContainer";
import ProjectsContainerThing from "./components/ProjectsContainer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-start items-center">
        <h1 className="m-10 text-black text-5xl underline decoration-gray-600 text-center sm:text-8xl">
          Next.js Projects
        </h1>
        <div className="bg-blue-600/25 p-6 rounded-xl m-5 md: max-w-2xl">
          <span className="text-black">
            This website is a hub of my personal hobby Projects. The projects
            will be for my own personal use, interest but most importantly for
            my personal development within software development and UI- and UX
            design.
            <br />
            Each project will emphesise on best practises within each field
            while also adding my own design choices, especially to the UI
          </span>
        </div>

        <ProjectsContainerThing />

        <Link href="/weather" className="text-black">
          Wheather App
        </Link>
      </div>
    </main>
  );
}
