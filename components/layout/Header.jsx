import classes from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li className={classes.navigation}>
                    <Link href='/events'>All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header