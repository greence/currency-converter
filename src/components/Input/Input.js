import './Input.scss'

const Input = props => {
	const { amount, setAmount, currency, setCurrency } = props

	return (
		<div className='block'>
			<div className='input'>
				<label htmlFor="amount" className='label'>Amount</label>
				<input
					type="number"
					name="amount"
					className='currency-input'
					value={amount}
					onChange={setAmount} />
			</div>
			<div className='select'>
				<label htmlFor="currency" className='label'>Choose currency</label>
				<select
					name="currency"
					className='currency-select'
					value={currency}
					onChange={e => setCurrency(e.target.value)}>
					<option value="USD" className='select_option'>$ USD</option>
					<option value="EUR" className='select_option'>€ EUR</option>
					<option value="UAH" className='select_option'>₴ UAH</option>
				</select>
			</div>
		</div>
	)
}

export default Input