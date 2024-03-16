import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";
import { selectLang } from "../redux/localSlice";

export default function App() {
  const lang = useSelector(selectLang);
  return (
    <div>
      <h1>Redux</h1>
      <Balance></Balance>
      <LangSwitcher />
      <p>Select lang: {lang}</p>
    </div>
  );
}
