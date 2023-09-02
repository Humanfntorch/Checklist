import { useParams } from "react-router-dom";


const aboutData = [
    {
        slug: "about-app",
        title: "About the app",
        description:
            "This application allows the user to create their own check-list by adding/deleting tasks, editing descriptions, and tracking when an item is completed or not with a persistent storage."
    },
    {
        slug: "about-developer",
        title: "About the developer",
        description:
            "My name is Jacob Rogers, I am a software developer with a masters in Computer Science and bachelors in physics from the University of Utah."
    }
];



const SinglePage = () =>
{
    const { slug } = useParams();
    const aboutContent = aboutData.find((item) => item.slug === slug);
    const { title, description } = aboutContent;

    return (
        <div className="main_content">
            <h2> {title} </h2>
            <p>{description}</p>
        </div>
    );
}
export default SinglePage;