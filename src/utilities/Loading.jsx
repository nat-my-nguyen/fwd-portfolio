import loading from '/assets/loading.gif';

const Loading = () => {
    return (
        <div className="loading-container">
            <img 
                src={loading} 
                alt="Loading" 
                className="loading" 
                id="loading"
            />
        </div>
    )
}

export default Loading