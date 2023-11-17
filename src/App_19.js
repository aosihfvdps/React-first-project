import { BrowserRouter, Routes, Route } from "react-router-dom";
import WomensProductStaticPage_19 from "./pages/WomensProductStaticPage_19";
import Shop2Page_19 from "./pages/supabase/Shop2Page_19";

const App_19 = () => {
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/static_19" element={<WomensProductStaticPage_19/>}/>
            <Route path="/supa_shop2_19" element={<Shop2Page_19/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App_19;
