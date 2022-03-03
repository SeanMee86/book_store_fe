export type Categories = string[]

export type Media = {
    name: string
    electronic: boolean
}[]

export type BookType<T> = {
    bkTitle: string
    author: string
    rating: number
    excerpt: string
    relations?: T
}