import { useState, useRef } from "react";

function ATM() {
  const [screen, setScreen] = useState("pincode"); // initial screen is pincode screen
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(1000); // initial balance
  const [res, setRes] = useState(null);
  const amountRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");

  const correctPin = "1234"; // hardcoded pincode

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === correctPin) {
      setScreen("transaction");
    } else {
      alert("Incorrect PIN. Please try again.");
    }
  };

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(amountRef.current.value);
    if (selectedOption === "credit") {
      setBalance(balance + amount);
      setRes(`Credited: ${amount}. New Balance: ${balance + amount}`);
    } else if (selectedOption === "debit") {
      if (amount > balance) {
        setRes("Insufficient balance.");
      } else {
        setBalance(balance - amount);
        setRes(`Debited: ${amount}. New Balance: ${balance - amount}`);
      }
    } else if (selectedOption === "checkbalance") {
      setRes(`Current Balance: ${balance}`);
    }
  };

  return (
    <div>
      {screen === "pincode" ? (
        <form onSubmit={handlePinSubmit}>
          <p>Enter Pincode:</p>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <form onSubmit={handleTransactionSubmit}>
          <p>Select Transaction:</p>
          <input
            type="radio"
            name="transaction"
            value="credit"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Credit
          <br />
          <input
            type="radio"
            name="transaction"
            value="debit"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Debit
          <br />
          <input
            type="radio"
            name="transaction"
            value="checkbalance"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Check Balance
          <br />
          <input type="text" ref={amountRef} placeholder="Enter Amount" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
      {res && <p>{res}</p>}
    </div>
  );
}

export default ATM;
