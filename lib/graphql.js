export function safePathQuery({ variables, ...rest }) {
  if (variables && "path" in variables) {
    const safePath = (variables.path || "")
      .split("?")[0]
      .split("#")[0]
      .replace(/\/$/, "");

    return {
      variables: {
        ...variables,
        path: safePath,
      },
      ...rest,
    };
  }

  return {
    variables,
    ...rest,
  };
}

export function fetcher(args) {
  let query = args;
  let variables;
  if (Array.isArray(query)) {
    [query, variables] = args;
  }

  return fetch(
    `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`,
    {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    }
  )
    .then((r) => r.json())
    .catch((error) => console.log(error));
}

export function simplyFetchFromSearchGraph(args) {
  return simplyFetchFromGraph({
    uri: `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/search`,
    ...args,
  });
}

export async function simplyFetchFromGraph({
  uri = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`,
  query,
  variables,
}) {
  const body = JSON.stringify(safePathQuery({ query, variables }));

  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
