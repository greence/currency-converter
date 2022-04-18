import './Header.scss'

const Header = props => {
	const exchangeRate = props.currency

	const currencyList = exchangeRate.map(item =>
		<div className="currency-list_item" key={item.ccy}><span className='currency_bold'>{item.ccy}: </span>{item.buy.substr(0, 5)}/{item.sale.substr(0, 5)}</div>
	)

	return (
		<div className="header">
			<h1 className='header__title'>Current currency:</h1>
			<ul className='header__currency-list'>
				{currencyList}
			</ul>
		</div>
	)
}

export default Header
