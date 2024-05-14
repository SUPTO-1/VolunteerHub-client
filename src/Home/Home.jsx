import { Helmet } from "react-helmet";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import NeedPostCard from "./NeedPostCard";
import Reviews from "./Reviews";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <NeedPostCard></NeedPostCard>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;