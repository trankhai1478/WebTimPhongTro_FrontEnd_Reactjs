
import { Routes, Route } from "react-router-dom";
import { Home, Login, RentailApartment, RentailHouse, RentailSpace, RetailRoom, HomePage } from "./containers/public";
import { path } from "./ultils/constant";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentailApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentailSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RetailRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentailHouse />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
