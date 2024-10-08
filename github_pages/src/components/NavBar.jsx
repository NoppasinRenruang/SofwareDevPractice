import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/20/solid';

const pages = [
    { name: 'Week1', href: '/week1_20240702', current: false },
    { name: 'Week2', href: '/week2_20240712', current: false },
    { name: 'Week3', href: '/week3_20240802', current: false },
    { name: 'Week4', href: '/week4_20240806', current: false },
    { name: 'Week5', href: '/week5_20240816', current: false },
    { name: 'Week6', href: '/week6_20240906', current: false },
];

export default function NavBar() {
    return (
        <nav
            className="flex border-b border-gray-200 bg-white"
            aria-label="Breadcrumb"
        >
            <ol
                role="list"
                className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
            >
                <li className="flex">
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <HomeIcon
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="h-full w-6 flex-shrink-0 text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <Link
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
