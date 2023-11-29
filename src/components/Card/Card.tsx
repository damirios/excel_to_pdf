import type { Row } from "read-excel-file";

import "./style.scss";

export function Card({ row }: { row: Row }) {
  console.log("card", row);
  const title = String(row[1]);
  const inventoryNumber = String(row[3] ?? "-");
  const factoryNumber = String(row[4] ?? "-");
  const releaseDate = String(row[5] ?? "-");
  return (
    <div className="card">
      <h2 className="card__title">
        <span>{title}</span>
      </h2>
      <div className="card__body">
        <div className="card__inventory-number card__line">
          Инвентарный номер:
          <span> {inventoryNumber}</span>
        </div>
        <div className="card__factory-number card__line">
          Заводской номер:
          <span> {factoryNumber}</span>
        </div>
        <div className="card__release-date card__line">
          Дата выпуска:
          <span> {releaseDate}</span>
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__maintenance card__line card__line_bold">
          Проведено ТО:
          <span></span>
        </div>
        <div className="card__next-maintenance card__line card__line_bold">
          Следующее ТО:
          <span></span>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}./assets/bg_new.png`}
        alt="logo"
        className="card__bg"
      />
    </div>
  );
}
