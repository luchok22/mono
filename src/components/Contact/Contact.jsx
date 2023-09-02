import React, { useState } from "react";
import scss from "./Contact.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import background from "../../assets/Contact/background.jpg";
import Button from "../Button/Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
 
  const handleCloseSuccess = () => {
    setIsSuccessVisible(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSuccessVisible(true);
    }
    setEmail('')
    setPhone('')
  };
  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9\s+-]*$/;
    const isEmailValid = emailPattern.test(email);
    const isPhoneValid = phonePattern.test(phone);

    setEmailError(isEmailValid ? "" : "Введите корректный email");
    setPhoneError(isPhoneValid ? "" : "Введите корректный номер телефона");

    setIsFormValid(isEmailValid && isPhoneValid);

    return isEmailValid && isPhoneValid;
  };
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setter === setEmail ? setEmailError("") : setPhoneError("");
  };
 
  return (
    <div id="contact" className={scss.contact}>
      <ReusableComponents title={"Остались вопросы?"}>  
        <div className={scss.contact__wrapper}>
          <div className={scss.contact__form}>
            <div className={scss.form__title}>
              <p>
                Оставьте свои контактные данные и наш менеджер обязательно с
                вами свяжется
              </p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className={scss.form__sending}>
                <input
                  type="text"
                  placeholder="Введите email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
                {emailError && <div className={scss.error}>{emailError}</div>}

                <input
                  type="text"
                  placeholder="Введите номер телефона"
                  value={phone}
                  onChange={(e) => handleInputChange(e, setPhone)}
                />
                {phoneError && <div className={scss.error}>{phoneError}</div>}
              </div>
              <div className={scss.form__btn}>
                <Button title={"Отправить заявку"} disabled={!isFormValid} />
              </div>
            </form>
            {isSuccessVisible && (
              <div className={scss.successMessage}>
                <button
                  className={scss.closeButton}
                  onClick={handleCloseSuccess}
                >
                  &times;
                </button>
                <h1>Заявка успешно принята</h1>
                <p>
                  Свяжемся с вами в <br /> течении дня
                </p>
              </div>
            )}
          </div>
          <div className={scss.contact__background}>
            <img src={background} alt="img" />
          </div>
        </div>
      </ReusableComponents>
    </div>
  );
};

export default Contact;
