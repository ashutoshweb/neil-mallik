import portraitImage from '@/images/Neil-grad-image-1.jpeg'
import Image from 'next/image'

export default function Mallik() {
    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">


                        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>

                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                     <Image
                        className="  bg-gray-50  "
                        src={portraitImage}
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        alt=""
                    />
                </div>
            </div>


        </div>
    )
}
