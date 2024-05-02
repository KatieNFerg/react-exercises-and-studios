import styles from './Description.module.css'
import React from 'react';

export const RecipeAuthor = () => {
    let authorLink = "https://sallysbakingaddiction.com/about/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-500x500.jpg";
    let authorName = "Sally McKenney";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's Baking Recipes</a> 
           </div>
        </div>
    );
    }
    class RecipeDescription extends React.Component{
        render() {
            return (
            <div>
<div>
<h1>Gingerbread Cookies</h1>
<p>Everything you need to know to make the best gingerbread cookies!</p>
</div>
<RecipeAuthor />
</div>
            );
             

        }
    }


export default RecipeDescription;