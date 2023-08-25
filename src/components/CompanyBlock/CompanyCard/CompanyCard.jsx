import React from "react";
import Button from "../../Button/Button";
import scss from "./CompanyCard.module.scss";
const CompanyCard = ({
  description,
  variable,
  title,
  arrow,
  variableBtn,
  btn,
}) => {
  const cardClasses = variable
    ? scss.card__light
    : scss.card__dark;

  const button = btn && (
    <Button title={title} arrow={arrow} variable={variableBtn} />
  );
  return (
    <div
      className={cardClasses}
    >
      <p>{description}</p>
      {button}
    </div>
  );
};

export default CompanyCard;
