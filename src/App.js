import React,{useState,useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'
//alan key from alan app 
const alanKey ='a0fd64217f6ed12e5ad06bc8633b86d92e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const [newsArticles,setNewsArticles] = useState([])
  const classes = useStyles();
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
     <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
     </div>
      <NewsCards articles ={newsArticles}/>
    </div>
  )
}

export default App
