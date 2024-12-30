const WelcomeMess = ({ onGetPostsClick }) => {
    return (
        <center className="wel-mess">
            <h1>There are no posts</h1>
            <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Get Posts From Server</button>
        </center>
    )
}

export default WelcomeMess;