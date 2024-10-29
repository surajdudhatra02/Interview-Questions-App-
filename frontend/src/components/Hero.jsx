import useQuestions from "../hooks/useQuestions";
import { Button } from "./Button";

const Hero = () => {
  const { questions, loading, error } = useQuestions(); // Use the custom hook

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const groupQuestionsByTopic = () => {
    const grouped = {};
  
    for (const ques of questions) {
      if (!grouped[ques.topic]) {
        grouped[ques.topic] = []; // It create an array for the topic if it doesn't exist
      }
      grouped[ques.topic].push(ques); // Add the current question to the topic array
    }
  
    return grouped;
  };

  const renderQuestions = () => {
    const groupedQuestions = groupQuestionsByTopic();

    return Object.keys(groupedQuestions).map((topic) => (
      <div key={topic}  id={topic} className="my-4">
        <h2 className="text-3xl bg-slate-200 flex justify-center">{topic}</h2> 
        {groupedQuestions[topic].map((ques) => (
          <div key={ques.id} className="flex mb-2">
            <p className="w-full p-1">{ques.text}</p> 
            <Button questionText={ques.text} /> 
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="m-2">
      <div className="gap-3 text-xl">
        <div className="my-4">
          {renderQuestions()}
        </div>
      </div>
    </div>
  );
};

export default Hero;
