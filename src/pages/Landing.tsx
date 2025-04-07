import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <p>Landing Page</p>
      <Button component={Link} to='/home' variant='contained'>
        Go to Home
      </Button> 
    </div>
  )
}