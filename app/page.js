import React from "react";
import BlogCard from "@/components/BlogCard";
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target";

const blogPosts = [
  {
    blogTitle: "Understanding JavaScript Closures",
    content: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from an outer function's scope even after the outer function has returned...",
    pdate: "2024-08-20",
    img: "https://autogpt.net/wp-content/uploads/2023/07/Pogla_Explore_the_latest_AI_news_from_groundbreaking_drug_trial_07ab875d-1e11-42d5-89ef-39ff3d5ab451.jpg"
  },
  {
    blogTitle: "An Introduction to Async/Await in JavaScript",
    content: "Async/await makes it easier to work with asynchronous code in JavaScript. It is syntactic sugar over promises, making the code look synchronous...",
    pdate: "2024-08-15",
    img: "https://coingeek.com/wp-content/uploads/2023/07/Artificial-Intelligence-2-jpg.webp"
  },
  {
    blogTitle: "Exploring the Power of React Hooks",
    content: "React hooks like useState and useEffect have changed the way we build components in React. In this post, we'll explore the basic hooks and how to use them...",
    pdate: "2024-08-10",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*kTRZnHMDE4Q6AITCaAEI5A.png"
  }
];

function Page(){
  return <div>
    <p className="text-center text-2xl font-light my-10 underline italic px-5">Empowering minds with knowledge, one line of code at a time.</p>
    <div className="sm:grid lg:grid-cols-3 lg:gap-3 px-2 lg:px-12">
      {
        blogPosts.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              bolgTitle = {blog.blogTitle}
              content={blog.content}
              pdate={blog.pdate}
              img={blog.img}
              url={"/blog-desc/" + index.toString() }
            />
          )
        })
      }
    </div>
  </div>
}



export default Page