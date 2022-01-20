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
        id
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

export const OngoingsQuery = gql`
  query GetOngoings($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: START_DATE_DESC, status: RELEASING) {
        id
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

export const CatalogQuery = gql`
  query GetCatalog(
    $page: Int
    $perPage: Int
    $format: MediaFormat
    $status: MediaStatus
    $episodes: Int
    $releaseYear: Int
    $isAdult: Boolean
    $sort: [MediaSort]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(
        type: ANIME
        format: $format
        status: $status
        episodes: $episodes
        seasonYear: $releaseYear
        sort: $sort
        isAdult: $isAdult
      ) {
        id
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

export const SearchQuery = gql`
  query GetSearch($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, search: $search) {
        id
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
