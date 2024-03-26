import Banner from "../banner/Banner";
import Books from "../books/Books";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="mt-10">
                <h1 className="font-semibold text-5xl text-center text-black">Books</h1>
            </div>
            <Books></Books>
        </>
    );
};

export default Home;