import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../app/login/Login';
import Register from '../app/register/Register';

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default PublicRoutes;
