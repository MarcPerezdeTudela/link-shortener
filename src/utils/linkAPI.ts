interface LinkObject {
  originalLink: string
  shortLink: string
}

export const getShortenedLink = async (link: string): Promise<LinkObject> => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
  const data = await response.json()
  const originalLink = data.result.original_link
  const shortLink = `https://${data.result.short_link}`
  return { originalLink, shortLink }
}
