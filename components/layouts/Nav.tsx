import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import { openPageLoaderAction } from "../../Redux/reducers/pageLoaderReducer";
import styles from "../../styles/Nav.module.scss";

const loadPage = (dispatch, url: string, push) => {
  dispatch(openPageLoaderAction());
  push(url);
};

const Nav: React.FC = () => {
  const navItems = useSelector((store: RootState) => store.nav);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <a
          href="#"
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            loadPage(dispatch, item.url, router.push);
          }}
          className={styles.navLink}
        >
          {item.body}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
