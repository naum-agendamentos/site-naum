import "./utils/globals";
import Rotas from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import {Cloudinary} from "@cloudinary/url-gen";

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmgfyyioo'
    }
  });


  return (
    <>
      <Rotas />
      <ToastContainer/>
    </>
  );
}
export default App;