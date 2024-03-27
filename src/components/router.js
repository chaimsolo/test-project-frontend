import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { links } from "../data/links";
import { nanoid } from 'nanoid';


//הראוטר המרכזי שמחליט איזה דף להציג לפי שורת הכתובת 
export default function MyRouter() {
    return (<BrowserRouter>
        <Routes>
            {/*עובר על כל הקישורים ובוחר איזה אלמנט להפעיל לפי הלינק  */}
            {links.map((link) => (
                <Route key={nanoid()} path={link.href} element={link.element} />
            ))}
        </Routes>
    </BrowserRouter>)
}