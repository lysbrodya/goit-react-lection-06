import { useDispatch, useSelector } from "react-redux";
import { changeLang, selectLang } from "../redux/localSlice";

export default function LangSwitcher() {
  const lang = useSelector(selectLang);
  const dispatch = useDispatch();
  return (
    <div>
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="lt">LT</option>
      </select>
    </div>
  );
}
