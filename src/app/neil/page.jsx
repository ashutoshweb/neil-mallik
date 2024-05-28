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





import imagem1 from '@/images/mallik/IMG_5463.jpg'
import imagem2 from '@/images/mallik/IMG_5409.jpg'
import imagem3 from '@/images/mallik/IMG_5376.jpg'

import imagem4 from '@/images/mallik/IMG_5167.jpg'

import imagem5 from '@/images/mallik/Neil0.jpg'
import imagem6 from '@/images/mallik/Neil00.jpg'
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: imagem1,
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: imagem3,
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: imagem4,
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: imagem2,
            alt: 'Model wearing plain gray basic tee.',
        },

    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const products = [
    {
        id: 1,
        name: 'Graduated!',
        href: '#',
        imageSrc: imagem1,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 2,
        name: 'With Dad',
        href: '#',
        imageSrc: imagem2,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 3,
        name: 'Ceremony',
        href: '#',
        imageSrc: imagem3,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 4,
        name: 'Stage',
        href: '#',
        imageSrc: imagem4,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 5,
        name: 'Baseball',
        href: '#',
        imageSrc: imagem5,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 6,
        name: 'Graduation',
        href: '#',
        imageSrc: imagem6,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },


    // More products...
]

const others = [
    {
        id: 1,
        name: '',
        href: '#',
        imageSrc: imagem5,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },
    {
        id: 2,
        name: '',
        href: '#',
        imageSrc: imagem6,
        imageAlt: "Front of men's Basic Tee in black.",
        place: 'Houston',
        date: '2024',
    },


    // More products...
]

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




              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                  <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                      <Image
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          className="h-full w-full object-cover object-center"
                      />
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                      <div className="aspect-h-2 aspect-w-3 overflow-hiddenh rounded-lg">
                          <Image
                              src={product.images[1].src}
                              alt={product.images[1].alt}
                              className="h-full w-full object-cover object-center"
                          />
                      </div>
                      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                          <Image
                              src={product.images[2].src}
                              alt={product.images[2].alt}
                              className="h-full w-full object-cover object-center"
                          />
                      </div>
                  </div>
                  <div className="hidden aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:block">
                      <Image
                          src={product.images[3].src}
                          alt={product.images[3].alt}
                          className="h-full w-full object-cover object-center"
                      />
                  </div>
              </div>

        <section aria-labelledby="related-products-heading " className="bg-white ">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 hidden lg:block">
                <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
                    Random
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {others.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>




              {/* Product info */}

              <section aria-labelledby="related-products-heading" className="bg-white lg:hidden">
                  <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                      <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
                          Graduation
                      </h2>

                      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products.map((product) => (
                              <div key={product.id} className="group relative">
                                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                      <Image
                                          src={product.imageSrc}
                                          alt={product.imageAlt}
                                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                      />
                                  </div>
                                  <div className="mt-4 flex justify-between">
                                      <div>
                                          <h3 className="text-sm text-gray-700">
                                              <a href={product.href}>
                                                  <span aria-hidden="true" className="absolute inset-0" />
                                                  {product.name}
                                              </a>
                                          </h3>
                                          <p className="mt-1 text-sm text-gray-500">{product.date}</p>
                                      </div>
                                      <p className="text-sm font-medium text-gray-900">{product.place}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>



    </Container>
  )
}
