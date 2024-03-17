import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";
import { selectLang, selectUpdeted } from "../redux/localSlice";

export default function App() {
  const local = useSelector(selectLang);
  const updatedAt = useSelector(selectUpdeted);
  return (
    <div>
      <h1>Redux</h1>
      <Balance></Balance>
      <LangSwitcher />
      <p>Select lang: {local}</p>
      <p>Last updated at: {updatedAt}</p>
    </div>
  );
}
