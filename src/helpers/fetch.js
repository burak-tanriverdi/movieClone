export async function useFetch(url) {
    try {
        const response = await fetch(url)

        debugger;
        const data = await response.json()

        return data.results
    } catch (error) {
        console.error('Fetch error handling:', error)
    }
}