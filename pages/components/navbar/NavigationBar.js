import { Fragment } from "react";

import styles from "./NavigationBar.module.css"

export default function NavigationBar() {
  return (
    <Fragment>
      <nav className={styles['navigation-bar']}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Todo List</li>
        </ul>
      </nav>
    </Fragment>
  )
}