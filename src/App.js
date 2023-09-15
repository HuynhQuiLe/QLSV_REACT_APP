import "toastify-js/src/toastify.css";
import "./App.css";
import Form from "./components/Form";
import Search from "./components/Search";
import SinhVienList from "./components/SinhVienList";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mx-auto">
          <h3 className="display-4 text-center">Quản Lý sinh viên</h3>
          <Form />
          <Search />
        </div>
        <div className="col-8 mx-auto">
          <SinhVienList />
        </div>
      </div>
    </div>
  );
}

export default App;
