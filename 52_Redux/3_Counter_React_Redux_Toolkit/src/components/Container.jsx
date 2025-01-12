const Container = ({ children }) => {
    return (
        <div className="container">
            <div className="card " style={{ width: "60%" }}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container;