import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './providers/AuthProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
