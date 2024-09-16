import Banners from "./Banners";
import Menus from "./Menus";
import db from "@/db.json"




export default function Links() {
    return (
        <div className="container text-text flex flex-col sm:flex-row-reverse  gap-4">
            <Banners banners={db.banners} />
            <Menus banners={db.banners} />
        </div>

    );
}
