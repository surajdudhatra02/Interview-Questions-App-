const Sidebar = ({ topics }) => {

    const handleClick = (topic) => {
        const section = document.getElementById(topic);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="bg-slate-500 pt-5 h-screen">
            <div>
                <h1 className="flex justify-center text-5xl mb-5 font-medium">Topics</h1>
            </div>
            <ol className="text-xl pl-12 pt-7">
                {topics.map((topic, index) => (
                    <li key={index}>
                        <a href={`#${topic}`} className="hover:text-blue-400 " onClick={(e) => {
                            e.preventDefault();
                            handleClick(topic);
                        }}>
                            {topic}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Sidebar;
