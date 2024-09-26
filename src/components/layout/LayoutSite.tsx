import scss from "./LayoutSite.module.scss";
import { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutProps> = ({ children }) => {

    return (
        <div className={scss.LayoutSite}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default LayoutSite;