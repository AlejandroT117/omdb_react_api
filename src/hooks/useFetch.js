import { useEffect, useState } from "react"

export const useGet = (fn, param)=>{
  const [response, setResponse] = useState(null)

  useEffect(() => {
    async function fetchApi() {
      let response = await fn(param)

      setResponse(response)
    }
  }, [])
  
  return response
}