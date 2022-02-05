export default interface CRUD<T> {
    list: (limit: number, page: number) => Promise<T>
    create: (resource: T) => Promise<T>
    getOne: (id: string, resource: T) => Promise<T>
    deleteById: (id: string) => Promise<boolean>
}