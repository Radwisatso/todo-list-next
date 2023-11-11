import { Fragment } from "react";

import styles from "./NavigationBar.module.css"

export default function NavigationBar() {
  return (
    <Fragment>
      <header className={styles['navigation-header']}>
        <div className={styles['navigation-container']}>
          <ul className={styles["navigation-list"]}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">To-do List</a></li>
          </ul>
        </div>
      </header>
    </Fragment>
  )
}