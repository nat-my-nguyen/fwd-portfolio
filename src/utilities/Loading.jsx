import loading from '../assets/loading.gif';

const Loading = () => {
    //Inline styling in case Loading loads faster than CSS
    return (
        <img 
            src={loading} 
            alt="Loading" 
            className="loading" 
            id="loading"
            style={{
                margin: 'auto',
                display: 'block' }}
        />
    )

}

export default Loading