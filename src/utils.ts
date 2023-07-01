export const createHref = ({
  path,
  url,
}: {
  path: string
  url: URL
}): string => {
  const [lang] = url.pathname.split('/').filter((s) => s)
  return `/${lang}${path}`
}
