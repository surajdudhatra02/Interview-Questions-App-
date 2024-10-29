import { useState, useEffect } from "react";
import axios from "axios";

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/api/question");
        setQuestions(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);
  
  return { questions, loading, error };
};

export default useQuestions;
