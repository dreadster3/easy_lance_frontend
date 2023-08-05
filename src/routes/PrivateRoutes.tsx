import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../app/home/Home';
import Logout from '../app/logout/Logout';

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default PrivateRoutes;
