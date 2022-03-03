export class ApiRequest {
    static async getBooks() {
        const res = await fetch("http://localhost:3000")
        return await res.json();
    }
}