import BagSummary from "../components/BagSummary";

const Bag = () => {
    return (
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                </div>
                <BagSummary></BagSummary>
                <div className="bag-summary">
                </div>
            </div>
        </main>
    )
}

export default Bag;