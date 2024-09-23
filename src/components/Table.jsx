// eslint-disable-next-line react/prop-types
function Table({ currency, weBuy, exchangeRate, weSell }) {
  return (
    <>
      <tbody>
        <tr key={currency}>
          <td className="td">{currency}</td>
          <td className="td">{weBuy}</td>
          <td className="td">{exchangeRate}</td>
          <td className="td">{weSell}</td>
        </tr>
      </tbody>
    </>
  );
}

export default Table;
