import React from "react";
import Link from "next/link";

export default function BlogCard({bolgTitle, pdate, content, img, url="/"}) {
    return <div className="shadow m-3 rounded-t-xl hover:scale-105 duration-300 transition-all ease-in hover:shadow-lg hover:shadow-blue-300">
        <div>
            <img className="rounded-t-xl" src={img} alt={bolgTitle} />
        </div>
        <div className="flex flex-col space-y-2 p-5">
            <div>
                <Link href={url}>
                <p className="font-semibold text-lg text-blue-600 underline">{bolgTitle}</p>

                </Link>
                <p className="text-xs text-gray-400">Published: {pdate}</p>
            </div>
            <p className="text-gray-600 text-sm">
                {content}
            </p>
        </div>
    </div>
}