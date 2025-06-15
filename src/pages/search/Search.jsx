import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { SearchBar } from "../../components";
import { scrollToTop } from "../../utilities/scrollToTop";

const Search = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="pg-search top-spacing-fix">
      <Helmet>
        <title>Search Movies & Shows - StreamVibe</title>
        <meta name="description" content="Find your favorite movies and TV shows on StreamVibe. Use our search feature to quickly discover new releases, classic films, and popular series." />
        <meta name="keywords" content="StreamVibe search, find movies, search shows, movie search, TV show search, streaming search" />
      </Helmet>
      <SearchBar />
    </div>
  );
};

export default Search;
