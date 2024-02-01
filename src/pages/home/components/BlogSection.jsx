import React, { useState, useEffect } from "react";
import BlogCard from "../../../components/BlogCard";

export default function BlogSection() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setblogs(data.blogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const styles = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  };

  return (
    <div className="flex flex-col text-center mb-16 gap-3 2xl:gap-16 2xl:text-start 2xl:pb-[160px]">
      <div className="flex flex-col 2xl:gap-3 2xl:pl-[120px] ">
        <h1 className="text-base font-medium">BLOGS</h1>
        <h1 className="text-5xl pb-5 2xl:text-[64px] ">Insightful Insights</h1>
      </div>

      <div
        className="flex overflow-x-auto px-[40px] 2xl:pl-[120px] "
        style={styles}
      >
        {blogs.map((items) => (
          <BlogCard
            image={items.photo_url}
            title={items.title}
            description={items.description}
          />
        ))}
      </div>
    </div>
  );
}
