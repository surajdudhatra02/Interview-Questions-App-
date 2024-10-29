import Hero from "./Hero";
import Sidebar from "./Sidebar";
import useQuestions from "../hooks/useQuestions";

const Main = () => {
  const { questions } = useQuestions();

  const topics = [...new Set(questions.map((q) => q.topic))]; // Get unique topics

  return (
    <div className="flex font-mono ">
      <div className="w-[20%] h-screen">
        <Sidebar topics={topics} />
      </div>
      <div className="w-[80%] overflow-y-scroll h-screen">
        <Hero />
      </div>
    </div>
  );
};

export default Main;
