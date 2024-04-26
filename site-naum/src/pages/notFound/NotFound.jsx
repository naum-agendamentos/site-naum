import React from "react";
import styles from "./NotFound.module.css";
import NavBar from "../../components/navbar/NavBar";

const NotFound = () => {
    return (
        <>
            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBar />
                    <div className={styles["content"]}>
                        <h1>
                            404
                            <br />
                            <span>
                                NOT FOUND
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NotFound;