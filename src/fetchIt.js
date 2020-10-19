const url = 'https://jsonplaceholder.typicode.com/'

export async function fetchIt (term) {

  const response = await fetch(url+term)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}