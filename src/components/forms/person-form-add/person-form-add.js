import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { fieldShort, fieldText, fieldFileSize } from "~/validators";
import { fetchPersonsAddRequest } from "~m/persons";

const PersonFormAdd = props => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { fetchPersonsAddRequest, parent } = props;

  const onSubmit = data => {
    fetchPersonsAddRequest({ ...data, parent });
  };

  return (
    <>
      <h2>Форма добавления персоны</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputbox">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            defaultValue="Имя для теста"
            ref={fieldShort(register)}
          />
          {errors.name && <p>Имя должно быть не короче 4 символов</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="lastname">Фамилия</label>
          <input
            type="text"
            name="lastname"
            placeholder="Фамилия"
            defaultValue="Фамилия для теста"
            ref={fieldShort(register)}
          />
          {errors.lastname && <p>Фамилия должно быть не короче 4 символов</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="middlename">Отчество</label>
          <input
            type="text"
            name="middlename"
            placeholder="Отчество"
            defaultValue="Отчество для теста"
            ref={register}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="postition">Должность</label>
          <input
            type="text"
            name="position"
            placeholder="Должность"
            defaultValue="Должность для теста"
            ref={fieldShort(register)}
          />
          {errors.position && <p>Должность должна быть не короче 4 символов</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="information">Информация</label>
          <textarea
            name="information"
            placeholder="Информация"
            defaultValue="Информация для теста"
            ref={fieldText(register)}
          />
          {errors.information && (
            <p>Информация о персоне должна содержать не менее 150 символов</p>
          )}
        </div>
        <div className="inputbox">
          <label htmlFor="information">Фотография</label>
          <input
            type="file"
            name="avatar"
            placeholder="Фотография"
            ref={fieldFileSize(register)}
          />
          {errors.avatar && <p>Максимальный размер файла 2 мегабайта</p>}
        </div>
        <button type="submit">Добавить!</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  fetchPersonsAddRequest
};
export default connect(undefined, mapDispatchToProps)(PersonFormAdd);
