import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice";
import { useState } from "react";
export default function Balance() {
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(Number(e.target.value), console.log(e.target.value))
        }
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(value))}>
        Withdraw credits
      </button>
    </div>
  );
}