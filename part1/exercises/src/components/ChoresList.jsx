import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
   <div>
<h1 className={classes.choresHeading}>My Chores</h1>
      <p className={classes.choresText}>Clean the house!</p>
   </div>
   )
}