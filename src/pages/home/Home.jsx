import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { scrollToTop } from "../../utilities/scrollToTop";
import { Banner, FreeTrial, Genre } from "../../components";
import StreamDevices from "../../components/home/StreamDevices/StreamDevices";
import CommonQuestions from "../../components/home/CommonQuestions/CommonQuestions";
import Subscription from "../../components/home/Subscription/Subscription";

const Home = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div className="pg-home">
      <Helmet>
        <title>StreamVibe – Watch Movies & TV Shows On Demand</title>
        <meta name="description" content="StreamVibe offers an unparalleled streaming experience. Watch movies, TV shows, and more on demand anytime, anywhere. Start your free trial today!" />
        <meta name="keywords" content="StreamVibe, streaming movies, TV shows on demand, free trial, online streaming, watch movies, entertainment" />
      </Helmet>
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrial />
    </div>
  )
}

export default Home
