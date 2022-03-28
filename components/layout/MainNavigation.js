import classes from './MainNavigation.module.css';
import Link from "next/link";
import { useRouter } from "next/router"

function MainNavigation() {
  const Router = useRouter();



  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={() => Router.push("/")}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href="/newmeetup" >Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
