import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'


import portraitImage from '@/images/mallik/IMG_5463.jpg'
import imagem2 from '@/images/mallik/IMG_5409.jpg'
import imagem3 from '@/images/mallik/IMG_5376.jpg'

import imagem4 from '@/images/mallik/IMG_5167.jpg'

import imagem5 from '@/images/mallik/Neil0.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Neil Mallik',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Neil Mallik
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
                A curious mind immersed in innovation, baseball, and community building is the hallmark of Neil Mallik’s personality. He discovered from a young age that creating value through everyday activity was personally rewarding and key to creating and sustaining a healthy, happy, and successful life.
</p>
<p>
    This purpose-driven mindset is also a perfect companion to his rigorous academic life. Yet, he believes in a more excellent vision of himself and for those he can impact by understanding that you cannot experience life in the classroom alone without also learning how it applies in the community you live in and the world at large.
</p>
<p>
    Because of this impact-focused approach, Neil has become a beacon of positivity and potential, growing incredibly, both as a young man and an academic scholar.
</p>
<p>
    A dynamic learning mindset drives Neil to continuously evolve in pursuing truth, intellectual excellence, and a better community and world.
    He is devoted to creating impact and making a better world through education, sports, research, innovation, and purpose-driven activities.
</p>

    <p>
        Neil sees the combination of education, innovation, service, character development, citizenship, and sports as critical components to a brighter future. His love of academics carried over to Klein ISD, where he earned President’s Award for Academic Excellence and became a member of the Junior National Honor Society, and now the John Cooper School, a top-rated K-12 college preparatory school in The Woodlands, Texas.
</p>
<p>
    He has continued to excel in all areas he works toward, bringing a sound character and a sense of purpose and meaning to everything he engages in. While he has life and career goals, he is also a fun and spirited person devoted to empowering people and bringing smiles to their lives.
            </p>

            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/Nmallik35" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:smallik@sanpec.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
                Nmallik35@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
