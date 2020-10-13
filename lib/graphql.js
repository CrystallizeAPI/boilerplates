export function fetcher(args) {
  let query = args
  let variables
  if (Array.isArray(query)) {
    ;[query, variables] = args
  }

  return fetch(
    `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`,
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
    .then((r) => r.json())
    .catch((error) => console.log(error))
}
