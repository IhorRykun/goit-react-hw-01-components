import css from '../transaction/transaction.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr className={ css.tr} key={id}>
            <td className={css.td__type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
