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
import portraitImage from '@/images/sangitamallik-linkedin-pic.jpeg'

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
    'Sangita P. Mallik. I live in New York City, where I design the future.',
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
          Sangita P. Mallik. I live in Houston, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            She is a dynamic entrepreneurial engineer, resilient grid expert, 
            and seasoned quality and sustainability professional with over 30 years of experience 
            in the electric power industry. 
            She is the first woman engineer in the infrastructure sector who won the 2023 Malcolm Baldrige 
            Leadership Excellence Award for creating innovative solutions for sustainability in the electric power sector. 
            The Malcolm Baldrige National Quality Award is the ONLY award for performance excellence granted by the President of the United States. 
</p>
<p>
In the '90s, Sangita was one of the emerging leaders of the quality revolution that transformed the infrastructure sector, driving it towards sustainability. Sangita ushered in a new age of quality and sustainability in the power industry by challenging the traditional infrastructure design and business development approach. She took bold and transformative initiatives to rebuild her community and transformed the power sectors onto a resilient path. 
</p>
<p>
Drawing strength from our distinctive STEM roots, she believes in learning by doing, learning from others, leading with integrity, and challenging assumptions to seek new knowledge in service of humanity. She strives for intellectual and creative excellence, leads with the highest standards of integrity, uses the full spectrum of human wisdom, and makes conscious decisions to realize sustained value for all stakeholders. 
</p>
<p>
Sangita has demonstrated great fortitude by devoting her life and career to building a more reliable, resilient, and sustainable electric power grid and transforming engineering leadership to manage change effectively. She is devoted to being a force for good and achieving sustainability through excellence journey daily activities. In addition, she strives to make the community a better place to live, work, and play.
</p>
<p>
She co-founded SANPEC in 2009, a purpose-led firm specializing in design, engineering, fabrication, risk mitigation, inspection, quality, and sustainability management of critical electric power assets throughout North America. 
</p>
<p>
Driven by her spirit and passion for sustainable development, Sangita is at the vanguard of making real-world knowledge, financial support, and a new opportunity accessible to the K-12 community. She has received several leadership and innovation awards to create a positive difference in the lives of America's youth and vulnerable communities, be a catalyst for social change, and create a unique innovation ecosystem to balance economic growth and the public good.
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
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
              smallik@sanpec.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
