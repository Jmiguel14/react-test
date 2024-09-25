export function Image ({ url, loading, alt }) {
  return loading || !url ? 'Loading Image' : <img src={url} alt={alt} />
}
