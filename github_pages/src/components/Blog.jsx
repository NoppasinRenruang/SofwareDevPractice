import Image from "next/image"
import authorProfile from "../images/authorProfile.jpeg"

export default function Blog(props) {
    const posts = [
        {
            id: 1,
            title: props.title,
            href: '#',
            description:
                props.description,
            imageUrl:
                props.imageUrl,
            date: props.date,
            datetime: '2020-03-16',
            category: { title: props.categoryTitle, href: '#' },
            author: {
                name: 'Noppasin Renruang',
                role: 'Cpr.E KMUTNB',
                href: 'https://github.com/NoppasinRenruang',
                imageUrl: authorProfile
            },
        },
    ];
    return (
        <div className="bg-white py-5 sm:py-5">
            <div className="mx-auto max-w-7xl px-3 lg:px-5">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mt-5 space-y-10 lg:mt-5 lg:space-y-10">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative isolate flex flex-col gap-8 lg:flex-row"
                            >
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time
                                            dateTime={post.datetime}
                                            className="text-gray-500"
                                        >
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            <Image
                                                src={post.author.imageUrl}
                                                alt=""
                                                className="h-10 w-10 rounded-full bg-gray-50"
                                            />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">
                                                    {post.author.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
