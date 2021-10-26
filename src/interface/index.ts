
export interface dataTypes {
    user?: Object,
    id?: string,
    name?: string,
    login?: string,
    avatar_url?: string,
    email?: string,
    location?: string,
    followers?: number,
    following?: number,
    public_repos?: number,
    bio?: string,
    node_id ?: string

}

export interface dataReposTypes {
    name?: string,
    description?: string,
    stargazers_count?: string
}

export interface RouteParams {
    name: string,
    page: string,
    id: string
}