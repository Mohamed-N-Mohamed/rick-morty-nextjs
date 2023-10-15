import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <header className='relative header bg-rick-morty-bg h-[80vh]'>
        <div className='overlay absolute top-0 left-0 right-0  h-[80vh]'></div>
      </header>
      <div className='header-content p-8'>
        <h1 className='text-2xl text-center'>Rick & Morty</h1>
        <p className='px-8 pt-8'>
          Welcome to the wacky and unpredictable world of Rick and Morty! Dive
          into the multi-dimensional adventures of an eccentric and brilliant
          scientist, Rick Sanchez, and his hapless, but good-hearted grandson,
          Morty Smith. This app is your portal to explore a universe filled with
          bizarre creatures, mind-bending science, and humor that pushes the
          boundaries of reality. Join Rick and Morty on their intergalactic
          escapades as they traverse through alternate realities, encounter
          strange alien civilizations, and engage in outlandish experiments. Get
          ready to embark on a journey that defies logic and challenges your
          imagination. Strap in and prepare for a wild ride through the cosmos!
        </p>
      </div>
    </main>
  );
}
