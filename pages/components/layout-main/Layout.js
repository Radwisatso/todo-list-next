import NavigationBar from "@/pages/components/navbar/NavigationBar";
import { Fragment } from "react";

import styles from "./Layout.module.css"


export default function Layout({ children }) {
  return (
    <Fragment>
      <NavigationBar />
      <div className={styles['layout-container']}>
        {children}
      </div>
    </Fragment>
  )
}