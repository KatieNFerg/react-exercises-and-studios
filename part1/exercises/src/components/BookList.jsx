export default function BookList() {
   let pageTitle = "Books I Recommend";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/first-lie-wins-ashley-elston.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/the-storm-we-made-vanessa-chan.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/mercury-amy-jo-burns.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="First Lie Wins" />
         <img src={book2} alt="The Storm We Made" />
         <img src={book3} alt="Mercury" />
      </div>      
   );
}