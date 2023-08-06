import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function AppRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    );
}

export default AppRoutes;
