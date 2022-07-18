import React, { ReactNode } from "react";
import Headers from "../Headers";
import Footer from "../Footers";
import styles from "./Layout.module.css";

import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function index(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>Next Js Basic | {pageTitle}</title>
                <meta name="description" content="website NextJS Basic" />
                {/* bisa juga tambahkan image */}
            </Head>
            <div className={styles.container}>
                <Headers />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
