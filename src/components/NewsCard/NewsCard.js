import React from 'react'
import {Card,CardContent,CardMedia,CardActions,CardActionArea,Button,Typography}from '@material-ui/core';

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i}) => {
    return (
       
       <Card>
           <CardActionArea>
               <CardMedia />
               <div>
                   <Typography variant ="body2" color="textSecondary" component ="h2"></Typography>
                   <Typography variant ="body2" color="textSecondary" component ="h2"></Typography>
               </div>
                    <Typography gutterBottom variant="h5"></Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p"></Typography>
                    </CardContent>
           </CardActionArea>
           <CardActions>
               <Button size="small" color="primary"></Button>
                    <Typography variant="h5"  color="textSecondary"></Typography>
           </CardActions>
       </Card>

    )
}

export default NewsCard
