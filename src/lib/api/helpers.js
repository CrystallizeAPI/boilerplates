let baseUrl = `https://api.crystallize.com/${process.env.GATSBY_CRYSTALLIZE_TENANT_ID}`

export function setBaseUrl(url) {
  baseUrl = url
}

export const doPost = async (url, options) => {
  try {
    const opts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...options,
    }

    if (typeof opts.body !== "string") {
      opts.body = JSON.stringify(opts.body)
    }

    const response = await fetch(`${baseUrl}${url}`, opts)

    if (!response.ok) {
      throw new Error(await response.text())
    }

    return response.json()
  } catch (error) {
    return {
      error,
    }
  }
}

export function doGet(url, options) {
  return fetch(`${baseUrl}${url}`, options).then((r) => r.json())
}
