import LoadingScreen from './LoadingScreen';

interface ILoadingScreenWrapperProps {
    children: React.ReactNode;
    isLoading: boolean;
}

function LoadingScreenWrapper({
    children,
    isLoading,
}: ILoadingScreenWrapperProps) {
    return (
        <div>
            {isLoading && <LoadingScreen />}
            {!isLoading && children}
        </div>
    );
}

export default LoadingScreenWrapper;
