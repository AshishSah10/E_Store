
import Header from "../../components/complex_components/header/Header";
import BannerImage from "./BannerImage";
import CategoriesList from "./CategoriesList";

const Home = () => {

    return(
        <div className="home-page">
            {/* <BannerImage/> */}
            <CategoriesList/>
        </div>
    )
}

export default Home;