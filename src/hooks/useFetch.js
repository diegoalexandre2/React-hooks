import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') =>{
    const [response, setResponse] = useState({
        data: null,
        loading: false
    })

          useEffect(function(){
              fetch(url, {method })
              .then(resp => resp.json())
              .the(json => setResponse({
                  data: json,
                  loading: false
              }))
          }, [url, method])

    return response
}