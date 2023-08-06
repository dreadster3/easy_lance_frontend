import ReactLoading from 'react-loading';

function LoadingScreen() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <ReactLoading
                    width="200px"
                    height="200px"
                    color="lightblue"
                    type="spinningBubbles"
                />
                <h1 className="mt-10 text-center text-xl">Loading...</h1>
            </div>
        </div>
    );
}

export default LoadingScreen;
