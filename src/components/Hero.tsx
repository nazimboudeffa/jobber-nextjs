import Image from 'next/image'
import unsplash from '/public/brooke-cagle-JBwcenOuRCg-unsplash.jpg'

function Hero () {
    return (
        <section
        className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center flex-1"
        >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
            >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                The job board for everyone
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
                Start a new career or improve your skills with our services.
            </p>

            <div className="mt-4 md:mt-8">
                <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Get Started Today
                </a>
            </div>
            </div>
        </div>

        <Image
            alt="Work hard"
            src={unsplash}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
        </section>
    )
}

export default Hero