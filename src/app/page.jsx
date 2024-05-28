import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'





import imagem1 from '@/images/mallik/IMG_5167.jpg'
import imagem2 from '@/images/mallik/IMG_5376.jpg'
import imagem3 from '@/images/mallik/IMG_5409.jpg'
import imagem4 from '@/images/mallik/IMG_5463.jpg'
import imagem5 from '@/images/mallik/Neil0.jpg'
import imagem6 from '@/images/mallik/Neil00.jpg'


import cvpdf from '@/images/Profile.pdf'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AcademicCap(props) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path
            d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/>
        <path
            d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/>
        <path
            d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/>
      </svg>


  )
}


function CommunityIcon(props) {
  return (
      <svg className="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
           stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"/>
        <line x1="13" y1="7" x2="13" y2="7.01"/>
        <line x1="17" y1="7" x2="17" y2="7.01"/>
        <line x1="17" y1="11" x2="17" y2="11.01"/>
        <line x1="17" y1="15" x2="17" y2="15.01"/>
      </svg>


  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RewardsIcon(props) {
  return (
      <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
           stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="9" r="6"/>
        <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)"/>
        <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)"/>
      </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">

      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
         {/* <span aria-hidden="true">—</span>{' '}*/}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}





function Resume() {
  let resume = [
    {
      company: 'PreK',
      title: 'Windwood Adventure Preschool',

      start: '',
      end: {
        label: '',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'K-8',
      title: 'Klein ISD',
      start: '',
      end: '',
    },
    {
      company: '8-10',
      title: 'The John Cooper School',
      start: '',
      end: '',
    },





  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <AcademicCap className="h-6 w-6 flex-none" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          < a href = {cvpdf} target="_blank" rel="noopener noreferrer"> Download CV</a>
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
  )
}






function Awards() {
  let awards = [
    {
      company: 'President’s Award for Academic Excellence',
      title: 'President’s education award for outstanding academic excellence in 5th grade',

      start: '',
      end: {
        label: '',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Gifted/Talented Student for excellence in Math and Science',
      title: 'Gifted and Talented recognition',
      start: '',
      end: '',
    },
    {
      company: 'National Junior Honor Society',
      title: 'Recognition for Character and Service',
      start: '',
      end: '',
    },
    {
      company: 'Klein ISD Champion of Character Award',
      title: 'Coyote Champion',
      start: '',
      end: '',
    },
    {
      company: 'Top First Baseman',
      title: 'Won several championships in baseball',
      start: '',
      end: '',
    },
    {
      company: 'Top Student-Athlete for excellence in sports',
      title: 'Recognized by Perfect Game and College Coaches',
      start: '',
      end: '',
    },
    {
      company: 'High Honor Roll-GPA 4',
      title: 'K-10',
      start: '',
      end: '',
    },

    {
      company: ' Recognition in music',
      title: '',
      start: '',
      end: '',
    },




  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <RewardsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Awards</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {awards.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

    </div>
  )
}


function Community() {
  let community = [
    {
      company: 'Rice University',
      title: 'Elite Tech Camps',

      start: '',
      end: {
        label: '',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'US Army Educational Outreach Programs',
      title: 'STEM',
      start: '',
      end: '',
    },
    {
      company: 'Gifted and Talented Programs',
      title: 'STEM',
      start: '',
      end: '',
    },
    {
      company: 'Volunteer activities',
      title: 'Music, Sports, Student Council, Community, Kumon',
      start: '',
      end: '',
    },




  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <CommunityIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Community Service</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {community.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
          ))}
        </ol>

      </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20 hidden lg:block">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[imagem1, imagem2, imagem3, imagem6, imagem5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function PhotosMobile() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[imagem1, imagem2, imagem3, imagem6, imagem5].map((image, imageIndex) => (
              <div
                  key={image.src}
                  className={clsx(
                      'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                      rotations[imageIndex % rotations.length],
                  )}
              >
                <Image
                    src={image}
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
          ))}
        </div>
      </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="relative z-10 mt-24 bg-gray-900 pb-20 sm:mt-32 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                  className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                  style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <Image
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                    src={imagem4}
                    alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">

                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <div className="font-semibold text-white">Neil Mallik</div>
                  <p className="mt-8 text-base">
                    A curious mind immersed in innovation, baseball, and community building.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white"></div>
                  <div className="mt-1 text-gray-400"></div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mt-24">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
          Neil Mallik
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A curious mind immersed in innovation, baseball, and community building.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">


            <Resume />
            <Community />

          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">

            <Awards />

            {articles.map((article) => (
                <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
