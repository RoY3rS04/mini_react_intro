import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button";
import { formatMoney, getTotal } from "./utils";

function App() {

  const [quantity, setQuanity] = useState(10000);
  const [deadline, setDeadline] = useState(6);
  const [total, setTotal] = useState(0);
  const [monthlyPay, setMonthlyPay] = useState(0);

  useEffect(() => {
    setTotal(getTotal(quantity, deadline))
  }, [deadline, quantity])

  useEffect(() => {
    setMonthlyPay(total / deadline);
  }, [total])

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setQuanity(+e.target.value);
  }

  function handleDecrementClick() {
    if(quantity === MIN) return

    setQuanity(quantity - STEP);
  }

  function handleIncrementClick() {
    if(quantity === MAX) return

    setQuanity(quantity + STEP);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operation='-'
          handleClick={handleDecrementClick}
        />
        <Button
          operation='+'
          handleClick={handleIncrementClick}
        />
      </div>
      
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p
        className="text-center text-5xl my-10 font-extrabold text-indigo-500"
      >
        {formatMoney(quantity)}
      </p>

      <h2 className="text-2xl text-center font-extrabold text-gray-500">
        Choose a <span className="text-indigo-500">deadline</span> to pay
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={deadline}
        onChange={e => setDeadline(Number(e.target.value))}
      >
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl text-center font-extrabold text-gray-500">
          Pays <span className="text-indigo-500">summary</span>
        </h2>
      </div>

      <p className="text-xl text-gray-500 text-center font-bold">
        {deadline} Months
      </p>
      <p className="text-xl text-gray-500 text-center font-bold">
        {formatMoney(total)} Total
      </p>
      <p className="text-xl text-gray-500 text-center font-bold">
        {formatMoney(monthlyPay)} Monthly
      </p>
    </div>
  )
}

export default App
