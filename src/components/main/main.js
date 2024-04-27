import "./main.css";
import {Article} from "./mcomps/article/article";
import {Section} from "./mcomps/section/section";
import {Aside} from "./mcomps/aside/aside";

export default function Main() {
    return (
        <main className="main">
            < Section />
            < Article />
            < Aside />
        </main>
    );
}
