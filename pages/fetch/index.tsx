import type { NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { catAxios, CatImage, THE_CAT_API_KEY } from 'utils/cat'

const FetchPage: NextPage = () => {
  const [catData, setCatData] = useState<CatImage[]>([])

  const endSpaceRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(()=>{
    // catAxios.get("/images/search?limit=5").then(response => {
    //   console.log("got data")
    //   setCatData(response.data || [])
    // })
    fetch("https://api.thecatapi.com/v1/images/search?limit=5", {
      method: "GET",
      headers: {'x-api-key': THE_CAT_API_KEY}
    })
    .then(response => {
        return response.json()        
      })
      .then(data => {
        console.log("data ", data)
        setCatData(data || [])
      })
  },[])

  useEffect(()=>{
    const callback = () => {
      console.log("showing end space")
    }

    const observer = new IntersectionObserver(callback)
    if (endSpaceRef.current){
      observer.observe(endSpaceRef.current)
    }
  },[])

  return (
    <div>
      <button onClick={handleClick} style={{height: "60px", width: "180px"}}>get</button>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {catData.map(item => (
          <div key={item.id}>
            <img 
              src={item.url} 
              style={{
                width: item.width, 
                height: item.height, 
                maxHeight: "400px", 
                objectFit: "contain"
              }} 
            />
          </div>
        ))}
        <div ref={endSpaceRef}></div>
      </div>
    </div>
  )
}

export default FetchPage