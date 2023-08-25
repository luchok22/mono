import React, { useMemo } from "react";
import scss from "./CompanyBlock.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import { companyCard } from "../../constants/companyBlock";
import CompanyCard from "./CompanyCard/CompanyCard";
import backImg from "../../assets/CompanyBlock/background.jpg";
const CompanyBlock = () => {
  const renderCard = useMemo(
    () => companyCard.map((card) => <CompanyCard {...card} />),
    [companyCard]
  );
  return (
    <div className={scss.company}>
      <ReusableComponents title={"О компании"} line>
        <div className={scss.company__wrapper}>
          <div className={scss.wrapper__card}>{renderCard}</div>
          <div className={scss.company__background}>
            <img src={backImg} alt="img"  />
          </div>
        </div>
      </ReusableComponents>
    </div>
  );
};

export default CompanyBlock;
