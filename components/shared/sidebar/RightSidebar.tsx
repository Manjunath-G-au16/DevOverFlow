import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "../RenderTag";
const hotQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 2,
    title: "How to Perfectly Center a Div with Tailwind CSS?",
  },
  {
    _id: 3,
    title: "What is the new useTransition hook in react?",
  },
  {
    _id: 4,
    title:
      "How to Lazy Load Components in Next.js without Affecting Server-Side Rendering?",
  },
  {
    _id: 5,
    title: "How to set up authentication in a Next.js application?",
  },
];

const popularTags = [
  {
    _id: 1,
    name: "NextJS",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "React",
    totalQuestions: 7,
  },{
    _id: 3,
    name: "TailwindCSS",
    totalQuestions: 4,
  },{
    _id: 4,
    name: "MongoDB",
    totalQuestions: 2,
  },{
    _id: 5,
    name: "Javascript",
    totalQuestions: 10,
  },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none  ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((tag)=>(
                <RenderTag 
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
                />
            ))}
          
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
