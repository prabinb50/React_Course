import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeItem from "./components/HomeItem"

function App() {

  const item = {
    id: '001',
    image: 'images/1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

  return (
    <>
      <Header></Header>
      <main>
        <div className="items-container">
          <HomeItem item={item}></HomeItem>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
