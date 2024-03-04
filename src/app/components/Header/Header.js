'use client'

import styles from "./style.module.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import {
    Button
} from "../"

const Header = () => {
    const pathname = usePathname();
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const onLogOut = () => {
        localStorage.removeItem('user');
        Cookie.remove('token');
        router.push('/');
    }

    return (
        <header
            className={styles.block}
        >
            <div className={styles.inner}>
                <div className={styles.logo_wrapper}>
                    <img
                        src="/logo.png"
                        className={styles.logo}
                    />
                    <div className={styles.title}>
                        Cyber Police<br />
                        Department
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link
                        href="/dashboard"
                        className={`${styles.navigation_item} ${pathname === "/dashboard" ? styles.navigation_item_active : ""}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/form"
                        className={`${styles.navigation_item} ${pathname === "/form" ? styles.navigation_item_active : ""}`}
                    >
                        Make a submission
                    </Link>
                    <Link
                        href="/faq"
                        className={`${styles.navigation_item} ${pathname === "/faq" ? styles.navigation_item_active : ""}`}
                    >
                        FAQ
                    </Link>
                </div>

                <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <img
                            src="/user-avatar.png"
                            className={styles.avatar}
                        />
                    </div>

                    <div className={styles.user_email}>
                        { user?.email || "loading..." }
                    </div>

                    <Button
                        className={styles.logout}
                        onClick={onLogOut}
                    >
                        Log out
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;