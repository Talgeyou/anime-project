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
                averageScore
                status
                episodes
                format
                duration
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

export const currentSeasonQuery = gql`
    query GetCurrentSeason($page: Int, $perPage: Int, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: $sort, status: RELEASING, season: WINTER) {
                id
                idMal
                title {
                    romaji
                    english
                    native
                }
                averageScore
                status
                episodes
                format
                duration
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
    query GetOngoings($page: Int, $perPage: Int, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: $sort, status: RELEASING) {
                id
                idMal
                title {
                    romaji
                    english
                    native
                }
                averageScore
                status
                episodes
                format
                duration
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
                averageScore
                status
                episodes
                format
                duration
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
                averageScore
                status
                episodes
                format
                duration
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

export const TrendingQuery = gql`
    query GetTrending($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME, sort: TRENDING_DESC) {
                id
                idMal
                title {
                    romaji
                    english
                    native
                }
                averageScore
                status
                episodes
                format
                duration
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

export const AnimeQuery = gql`
    query GetAnime($id: Int) {
        Media(type: ANIME, idMal: $id) {
            id
            idMal
            title {
                romaji
                english
                native
            }

            averageScore
            status
            episodes
            format
            duration
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
`;

export const AnimeDetailsQuery = gql`
    query GetAnimeDetails($id: Int) {
        Media(type: ANIME, id: $id) {
            id
            idMal
            bannerImage
            title {
                romaji
                native
                english
            }
            trailer {
                id
                site
                thumbnail
            }
            type
            format
            status
            description
            season
            seasonYear
            episodes
            duration
            countryOfOrigin
            source
            genres
            synonyms
            averageScore
            characters {
                edges {
                    id
                    role
                    node {
                        id
                        name {
                            full
                        }
                        image {
                            large
                            medium
                        }
                        gender
                        age
                    }
                }
            }
            relations {
                edges {
                    id
                    relationType
                    node {
                        id
                        idMal
                        type
                        title {
                            english
                            romaji
                            native
                        }
                        coverImage {
                            extraLarge
                            large
                            medium
                            color
                        }
                    }
                }
            }
            isAdult
        }
    }
`;
