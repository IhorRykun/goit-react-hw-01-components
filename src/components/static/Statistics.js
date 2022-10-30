import css from '../static/statistic.module.css';

export const StaticId = ({ title, stats }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.list}>
          {stats.map(({ label, percentage, id }) => {
            return (
              <li className={css.list__item} key={id}>
                <span>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
