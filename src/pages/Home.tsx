import { useAppSelector } from "../store"


export default function Homes() {
  const message = useAppSelector(state => state.hello)
  return (
    <div>
      <p>Home Page!!!!</p>
      {message}
    </div>
  )
}