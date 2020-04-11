import { useState, useEffect } from 'react'

const useStateCallback = (initState, callback) => {
  const [state, setState] = useState(initState)

  useEffect(() => callback(state), [state, callback])

  return [state, setState]
}

export default useStateCallback