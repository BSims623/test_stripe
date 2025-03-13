
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
    </>
  )
}

export default App
