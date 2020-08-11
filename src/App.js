import React,{useState,useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from './components/NewsCards/NewsCards'

//alan key from alan app 
const alanKey ='a0fd64217f6ed12e5ad06bc8633b86d92e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const [newsArticles,setNewsArticles] = useState([])
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='headlines')
        setNewsArticles(articles);
      }
    })
  },[])
  return (
    <div>
      <h1>ALan AI news app</h1>
      <NewsCards articles ={newsArticles}/>
    </div>
  )
}

export default App
