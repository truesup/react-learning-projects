import './Info.css';
import styles from './Info.module.css';

// console.log(styles);
// {
//   "info": "Info_info__s8vxq",
//   "myOtherButton": "Info_myOtherButton__8e85U"
// }

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <h2>Heading</h2>
      <button className={styles.myOtherButton}>info button</button>
    </div>
  );
}

export default Info;
