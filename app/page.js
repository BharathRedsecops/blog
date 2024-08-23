'use client'
import React from "react";
import BlogCard from "@/components/BlogCard";
import { useState, useEffect } from "react";



function Page() {

  const [test, setTest] = useState()


  async function get_todos() {
    fetch("http://localhost:5000").then((res) => {
      if (res.status === 404){
        alert("no data found")
        return;
      }

      if (res.status === 500){
        alert("server error")
        return;
      }

      res.json().then((data) => {
        setTest(data.datax)
      })

    })


  }

  get_todos()

 


  return <div>
    <p className="text-center text-2xl font-light my-10 underline italic px-5">Empowering minds with knowledge, one line of code at a time.</p>
    <div className="sm:grid lg:grid-cols-3 lg:gap-3 px-2 lg:px-12">
      {
        test?.map((blog, idx) => {
          return (
            <BlogCard
              img={blog.img}
              bolgTitle={blog.blogTitle}
              pdate={blog.pdate}
              content={blog.content}
              url={blog.url}

              />
          )
        })
      }
    </div>
  </div>
}



export default Page