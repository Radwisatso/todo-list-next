import NavigationBar from "@/pages/components/navbar/NavigationBar";
import { Fragment } from "react";


export default function Layout({ children }) {
  return (
    <Fragment>
      <NavigationBar />
      {children}
    </Fragment>
  )
}