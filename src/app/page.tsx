import Image from "next/image";
import Link from "next/link";
import characterImage from '@/assets/images/character-intro-img.png';
import locationImage from '@/assets/images/location-intro-img.png';
import episodeImage from '@/assets/images/episode-intro-img.jpg';

const sections = [
  {
    title: 'Buckle Up, Mortys!',
    description: `
    Dive into the Wubba Lubba Dub Dub of the multiverse's craziest crew. 
    Meet the mad scientist, the awkward teenager, and the bizarre cast of characters that make every dimension unique.
    `,
    image: characterImage,
    linkLabel: 'View Characters',
    linkUrl: '/characters'
  },
  {
    title: 'Beyond Earth (C-137)',
    description: `
    Explore the wondrous and weird realms of the Rick and Morty multiverse. 
    From the Citadel of Ricks to the Microverse, each dimension offers a new adventure. 
    Get ready to travel through time, space, and the minds of the creators of the universe.
    `,
    image: locationImage,
    linkLabel: 'View Locations',
    linkUrl: '/locations'
  },
  {
    title: 'Interdimensional Mayhem',
    description: `
    Relive the most memorable Rick and Morty episodes. 
    Whether you're a fan of the Council of Ricks or the Vindicators, there's a world out there waiting to be discovered.
    `,
    image: episodeImage,
    linkLabel: 'View Episodes',
    linkUrl: '/episodes'
  },
];

export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto my-10 px-6 space-y-24">
      <div>
        <div className="w-fit mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-lime-500">Rick And Morty</h1>
          <p className="text-md sm:text-lg">The official guide to multiverse's craziest adventures</p>
        </div>
      </div>
      <div className="space-y-16">
        {sections.map((section) => (
          <div
            key={section.linkUrl}
            className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10"
          >
            <div className="flex flex-col gap-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dark:text-lime-500">{section.title}</h2>
              <p className="text-balance text-sm md:text-base lg:text-lg xl:text-xl">{section.description}</p>
              <Link
                href={section.linkUrl}
                className="text-white font-bold bg-sky-500 hover:bg-sky-400 p-3 rounded-md w-fit"
              >
                {section.linkLabel}
              </Link>
            </div>
            <Image
              src={section.image}
              alt={section.title}
              priority
              className="w-full md:w-[400px] lg:w-[500px] xl:w-[600px] rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
