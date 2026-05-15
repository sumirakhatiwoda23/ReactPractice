import { NavLink } from "react-router";

export default function Notfound() {
  return (
    <div className="p-5">

<h1 className="text-xl text-red-700">Page not found </h1>
<NavLink to={'/'} className={"underline"}>Please go back</NavLink>

    </div>
  )
}
