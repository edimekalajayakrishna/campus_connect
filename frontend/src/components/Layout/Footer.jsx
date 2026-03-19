import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; {new Date().getFullYear()} Campus Connect. All Rights Reserved.</div>
<div>
  <Link to="#" aria-label="GitHub"><FaGithub /></Link>
  <Link to="#" aria-label="LinkedIn"><FaLinkedin /></Link>
</div>
      
    </footer>
  )
}

export default Footer