import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript with React in Next.js?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "React" },
      { _id: "tag5", name: "Next.js" },
    ],
    author: {
      _id: "author1",
      name: "Modimanju",
      picture: "profile.jpg",
    },
    upvotes: 4500,
    views: 7000000,
    answers: [{answer:"abc"}],
    createdAt: new Date("2023-11-19"),
  },
  {
    _id: "2",
    title: "How to customize styles in Tailwind CSS?",
    tags: [
      { _id: "tag6", name: "Tailwind CSS" },
    ],
    author: {
      _id: "author2",
      name: "Manunath G",
      picture: "profile.jpg",
    },
    upvotes: 1,
    views: 80,
    answers: [],
    createdAt: new Date("2023-11-20"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[17px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => <QuestionCard 
          key={question._id} 
          _id={question._id}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}

          />)
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
