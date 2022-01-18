import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";
import { SearchAnimeForm } from "../../components/SearchAnimeForm/SearchAnimeForm";
import { CatalogQuery } from "../../queries/Anime.query";
import { AnimeListType } from "../../types/AnimeList.type";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

Container.displayName = "CatalogContainer";

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const format = searchParams.get("format");
  const status = searchParams.get("status");
  const episodes = searchParams.get("episodes");
  const variables: {
    page: number;
    perPage: number;
    format?: string;
    status?: string;
    episodes?: number;
  } = {
    page: page && Number(page) ? Number(page) : 1,
    perPage: 50,
  };
  if (format) {
    variables.format = format;
  }
  if (status) {
    variables.status = status;
  }
  if (episodes && Number(episodes)) {
    variables.episodes = Number(episodes);
  }
  console.log({ ...variables });
  const { data } = useQuery(CatalogQuery, {
    variables,
  });

  return (
    <Layout>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2em",
        }}
      >
        {data ? (
          <>
            <AnimeList
              animeList={data.Page as AnimeListType}
              pagination={true}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <SearchAnimeForm
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </div>
        )}
      </Container>
    </Layout>
  );
};
