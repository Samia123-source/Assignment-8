import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="mx-20 mt-6">
            <Banner></Banner>
            <Books></Books>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;