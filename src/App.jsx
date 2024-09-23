import { useCallback, useEffect, useState } from 'react';
import getCurrency from './api/getCurrency';
import Loading from './components/Loading';
import Table from './components/Table';
import ErrorComponent from './components/Error';

function App() {
  const [currency, setCurrency] = useState({ rates: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const result = await getCurrency();
      setCurrency(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // useEffect(() => {
  //   // IIFE (Immediately Invoked Function Expression)
  //   (async () => {
  //     try {
  //       const result = await getCurrency();
  //       setCurrency(result);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  const currenciesToDisplay = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'];
  const filteredRates = Object.entries(currency.rates).filter(([key]) =>
    currenciesToDisplay.includes(key)
  );

  const weBuy = (rate) => {
    return (rate * 1.0122).toFixed(4);
  };

  const weSell = (rate) => {
    return (rate * 0.9891).toFixed(4);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th"></th>
            <th className="th">WE BUY</th>
            <th className="th">EXCHANGE RATE</th>
            <th className="th">WE SELL</th>
          </tr>
        </thead>
        {filteredRates.map(([key, value]) => (
          <Table
            key={key}
            currency={key}
            weBuy={weBuy(value)}
            exchangeRate={parseFloat(value).toFixed(4)}
            weSell={weSell(value)}
          />
        ))}
      </table>
      {/* <table>
        <thead>
          <tr>
            <th className="th"></th>
            <th className="th">WE BUY</th>
            <th className="th">EXCHANGE RATE</th>
            <th className="th">WE SELL</th>
          </tr>
        </thead>
        <tbody>
          {filteredRates.map(([k, v]) => (
            <tr key={k}>
              <td className="td">{k}</td>
              <td className="td">{weBuy(v)}</td>
              <td className="td">{parseFloat(v).toFixed(4)}</td>
              <td className="td">{weSell(v)}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
