
import './App.css'

function App() {
  return (
    <>
      <h2>Enter Payment Amount</h2>
    <form id="paymentForm" method="post" action="https://netlifyfunctions101.netlify.app/api/v1/checkout">
        <label htmlFor="amount">Amount (USD):</label>
        <input type="number" id="amount" name="amount" required min="1"/>
        <button type="submit">Pay Now</button>
    </form>
    <br />
    <h2>For test enter in: 4242 4242 4242 4242 for Card Number</h2>
    <h2>Then enter ANY Date and CSV</h2>
    </>
  )
}

export default App
