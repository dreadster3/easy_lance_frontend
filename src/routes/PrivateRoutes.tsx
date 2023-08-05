import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../app/home/Home';

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default PrivateRoutes;
