import ItemList from "../ItemList";
import SelectedItemList from "../SelectedItemList";

const Home = () => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="d-flex w-100 justify-content-between flex-wrap">
        <ItemList />
        <SelectedItemList />
      </div>
    </div>
  );
};

export default Home;
