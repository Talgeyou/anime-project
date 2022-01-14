import { gql } from "@apollo/client";

export const TopQuery = gql`
  query GetTop($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: SCORE_DESC) {
        idMal
        title {
          romaji
          english
          native
        }
        type
        format
        status
        description
        seasonYear
        episodes
        duration
        coverImage {
          extraLarge
          large
          medium
          color
        }
        genres
        averageScore
      }
    }
  }
`;
