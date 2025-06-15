import { PageNotFoundWrap } from "./PageNotFound.styles";
import { Images } from "../../assets/images";
import { Helmet } from "react-helmet";
import { HeadingTitleMd } from "../../styles/global/default";

const PageNotFound = () => {
  return (
    <PageNotFoundWrap className="flex items-center justify-center flex-col">
      <Helmet>
        <title>Page Not Found - StreamVibe</title>
        <meta name="description" content="The page you are looking for could not be found. Please check the URL or return to the homepage." />
      </Helmet>
      <div className="page-not-found-img">
        <img src={Images.Error404} alt="" />
      </div>
      <HeadingTitleMd>Page Not Found !</HeadingTitleMd>
    </PageNotFoundWrap>
  );
};

export default PageNotFound;
