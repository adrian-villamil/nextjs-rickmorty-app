import Link from "next/link"

export const Footer = () => {
  return (
    <div className="min-h-32 border-t flex flex-col justify-center items-center gap-1">
      <p className="text-sm text-muted-foreground">
        {'All intellectual property rights associated with the Rick and Morty universe belong to '}
        <Link
          href={'https://www.adultswim.com/'}
          target="_blank"
          className="text-sky-500"
        >
          Adult Swim
        </Link>
      </p>
      <p className="text-sm text-muted-foreground">
        {'This app utilizes data from '}
        <Link
          href={'https://rickandmortyapi.com/'}
          target="_blank"
          className="text-sky-500"
        >
          The Rick and Morty API
        </Link>
      </p>
      <p className="text-sm text-muted-foreground">
        {'Created by '}
        <Link
          href={'https://github.com/adrian-villamil'}
          target="_blank"
          className="text-sky-500"
        >
          adrian-villamil
        </Link>
      </p>
    </div>
  )
}
