import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { OngoingsQuery } from "../queries/Anime.query";
import { AnimeListType } from "../types/AnimeList.type";

type Props = {
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
};

export const Ongoing = (props: Props) => {
  const { currentTheme, onThemeChange } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? searchParams.get("page") : 1;
  const { loading, error, data } = useQuery(OngoingsQuery, {
    variables: {
      page: page,
      perPage: 50,
      sort: "START_DATE_DESC",
    },
  });

  if (loading)
    return (
      <Layout currentTheme={currentTheme} onThemeChange={onThemeChange}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      </Layout>
    );
  if (error)
    return (
      <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      </Layout>
    );
  if (data) {
    return (
      <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
        <AnimeList
          animeList={data.Page as AnimeListType}
          pagination={true}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Layout>
    );
  }
  return <h1>I don't know what has been happened xD</h1>;
};
