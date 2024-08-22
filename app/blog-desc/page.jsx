import React from "react";

export default function Page() {
    return <div className="flex flex-col">
        <div className="w-full h-64">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*kTRZnHMDE4Q6AITCaAEI5A.png" alt="" className="w-full h-80" />
        </div>
        <div className="mt-32 max-w-7xl mx-5 lg:mx-auto">
            <div className="my-5">
                <p className="text-4xl font-semibold text-blue-500">Blog title</p>
                <p className="text-gray-400">Published Date</p>
            </div>
            <p className="text-gray-600 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis asperiores dignissimos eius adipisci mollitia nemo facilis at accusamus veritatis exercitationem? Libero hic quaerat in vel obcaecati numquam ducimus laboriosam nostrum. more Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos voluptatem doloribus est deserunt aspernatur sapiente laborum voluptatibus optio. Atque ullam pariatur odio quo a earum quis ducimus similique adipisci.</p>
            <div className="flex space-x-5 items-center mb-5">
                <div className="rounded-full h-10 w-10 bg-blue-300"></div>
                <div>
                    <p className="text-gray-700 font-semibold">Author name</p>
                    <p className="text-xs  text-gray-500">Authr Designation</p>
                </div>
            </div>
            <p className="font-semibold text-lg">Author Bio</p>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias officia voluptas aliquam incidunt, quibusdam sint at excepturi ipsum veritatis necessitatibus accusantium quasi ab qui temporibus libero delectus voluptates quo!</p>
        </div>
    </div>
}