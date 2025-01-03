const LoadingSpinner = () => {
    const colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    return (
        <div className="spinner-container">
            {colors.map((color) => (
                <div key={color} className={`spinner-border text-${color}`} role="status" style={{ height: "5rem", width: "5rem" }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            ))}
        </div>
    );
};

export default LoadingSpinner;
