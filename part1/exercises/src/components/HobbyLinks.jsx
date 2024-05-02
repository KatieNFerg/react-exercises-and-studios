import classes from "./HobbyLinks.module.css";

export default function HobbyLinks() {
  let hobbyLinks = [
    "https://hobbycents.com/hobby-guides/hiking-hobby-guide/",
    "https://www.annmariejohn.com/why-horse-riding-is-excellent-hobby",
  ];

  return (
    <div>
      <h3 className={classes.hobbyHeader}>My Hobbies</h3>
      <p className={classes.hobbyText}>
        <a href={hobbyLinks[0]} target="blank">
          Hiking
        </a>
        <br></br>
        <a href={hobbyLinks[1]} target="blank">
          Horseback Riding
        </a>
      </p>
    </div>
  );
}
