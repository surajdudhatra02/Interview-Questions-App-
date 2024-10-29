
import { AiFillYoutube } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const Button = ({ questionText }) => {

    const GoogleSearch = (question) => {
        const query = encodeURIComponent(question);
        window.open(`https://www.google.com/search?q=${query}`);
    };

    const YouTubeSearch = (question) => {
        const query = encodeURIComponent(question)
        window.open(`https://www.youtube.com/search?q=${query}`,);

    }

    return (
        <div className="flex mt-2">
            <button 
                onClick={() => GoogleSearch(questionText)} 
                type="button"
                className="ml-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
                <span className="flex items-center">
                    <FcGoogle className="mr-2" />
                    Search
                </span>
            </button>

            <button
                onClick={() => YouTubeSearch(questionText)}
                type="button"
                className="ml-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
                <span className="flex items-center">
                    <AiFillYoutube className="mr-2 text-red-700" />
                    Search
                </span>
            </button>
        </div>
    );
};


