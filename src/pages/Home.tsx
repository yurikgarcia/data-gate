import { useAppSelector } from "../store"



export default function Homes() {

  const user = useAppSelector(state => state.user.user)


  return (
    <div>
      <p>Welcome to the Home Page!!!!</p>
      {user ? (
        <>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  )
}
