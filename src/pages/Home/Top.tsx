import { Layout } from "../../components/Layout/Layout";
import { useQuery } from "@apollo/client";
import { TopQuery } from "../../queries/Anime.query";
import { AnimeListType } from "../../types/AnimeList.type";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { Loader } from "../../components/Loader/Loader";

export const Top = () => {
  const { loading, error, data } = useQuery(TopQuery, {
    variables: {
      page: 1,
      perPage: 50,
    },
  });

  if (loading)
    return (
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      </Layout>
    );
  if (data) {
    console.log(data);
    return (
      <Layout>
        <AnimeList animeList={data.Page as AnimeListType} />
      </Layout>
    );
  }
  return <h1>I don't know what has been happened xD</h1>;
};
