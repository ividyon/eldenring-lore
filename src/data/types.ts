import { SearchResult } from "minisearch"

export interface DataPoint {
    id: number
    title: string
    body: string
}

export interface DataJson {
    $schema: string
    data: DataPoint[]
}

export type DataSearchResult = SearchResult & DataPoint