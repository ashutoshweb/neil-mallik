import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const sports = [
  {
    name: 'Spring-Klein Sports Association',
    description:
      'Spring-Klein Sports Association',
    link: { href: 'http://planetaria.tech', label: 'google.com' },

  },
  {
    name: 'Klein ISD',
    description:
      'Klein ISD ( Team A)',
    link: { href: '#', label: 'google.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Prime9 Baseball',
    description:
      'Prime9 Baseball (Travel Baseball)',
    link: { href: '#', label: 'google.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Klein Warriors Baseball',
    description:
      'Klein Warriors Baseball (Travel Baseball)',
    link: { href: '#', label: 'google.com' },
    logo: logoCosmos,
  },
  {
    name: 'HP Baseball',
    description:
      'HP Baseball (Travel Baseball)',
    link: { href: '#', label: 'google.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Lynx Baseball',
    description:
        'Lynx Baseball (Travel Baseball) ',
    link: { href: '#', label: 'google.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'The John Cooper',
    description:
        'The John Cooper (Junior Varsity and Varsity)',
    link: { href: '#', label: 'google.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Sports() {
  return (
    <SimpleLayout
      title="Sports Experience (9 yrs)"
      intro="Neil Mallik is a 2024 1B/RHP, 3B with a 5-9 140 lb. frame from Tomball, TX who attends The John Cooper School.
      Neil is an emerging athlete who has the frame, muscle twitch, and fundamental ability to continue to grow his game.
       He ran a 7.71 60-yard dash. Primarily a first baseman, he utilizes very clean footwork to position.
       His glove plays and he transitions well to throw. His 70-mph velocity allows his throws to show both carry and accuracy.
       On the mound, Neil uses a full arm action and a high three-quarters arm slot, working down the slope with routine, repeatable effort.
       He pitches off his 68-72 mph fastball that will occasionally show some cut.
       His 59-mph curveball shows 11-to-5 break and is a tight spinner with sound depth.
       At the plate, Neil uses an open stance and shows looseness in his hands.
        His swing path is a bit steep, but he gets his barrel to a solid contact point and shows routine bat-to-ball ability.
        He displays an ability to eventually be a plus power threat as he matures."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sports.map((sport) => (
          <Card as="li" key={sport.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">

            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={sport.link.href}>{sport.name}</Card.Link>
            </h2>
            <Card.Description>{sport.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{sport.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
