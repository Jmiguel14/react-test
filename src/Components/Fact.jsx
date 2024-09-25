export const Fact = ({ fact, loading }) => {
  return <p>{loading || !fact ? 'Loading' : fact}</p>
}
