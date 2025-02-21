import Link from "next/link";

const menuItems = [
  {
    title: "Instalation",
    items: [
      { lebel: "Instalation", path: "" }
    ]
  }
]

const Sideber = () => {
  return (
    <aside>

    </aside>
  )
}

const Menu = ({ title, }) => {
  return (
    <div>
      <p></p>
      <ul>
        <li><Link href={}>{}</Link></li>
      </ul>
    </div>
  )
}

export default Sideber;
