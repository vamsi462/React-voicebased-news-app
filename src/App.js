import React,{useState,useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'
import wordsToNumbers from 'words-to-numbers'
//alan key from alan app 
const alanKey ='a0fd64217f6ed12e5ad06bc8633b86d92e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const [newsArticles,setNewsArticles] = useState([]);
  const  [activeArticle,setActiveArticle]= useState(-1);
  const classes = useStyles();
 
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='headlines'){
        setNewsArticles(articles);
        setActiveArticle(-1)
      }
      else if(command ==='highlight'){
        setActiveArticle((prevArticle)=> prevArticle + 1)
      }
      else if(command ==='open'){

       const parseNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy:true}):number;
       const article = articles[parseNumber-1];
        if(parseNumber > 20){
          alanBtn().playText('please try that again')
        }
        else if(article){
          window.open(article.url, '_blank');
          alanBtn().playText('opening..')
        }
       
      }
    }
    })
  },[])
  return (
    <div>
     <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
     </div>
      <NewsCards articles ={newsArticles} activeArticle={activeArticle}/>
    </div>
  )
}

export default App
