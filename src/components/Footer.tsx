import React from "react"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

const Footer = (props: { year: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined })=>{
return (
    <footer>
        <p>Copyright {props.year}</p><br/>
    </footer>
)

}
export default Footer;