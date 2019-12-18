import React from "react";
import useForm from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { fetchPersonsListSortRequest } from "~m/persons";
const Sorting = () => {
  // Делаем стейт с сортировкой - а в запросе списка, параметры сортировки получаем из этого стейта, таким образом при изменении стейта сортировки будем генерировать новый запрос с новым объектом сортировки

  //Второй варинат - просто пишем значение в локал сторедж, а в компоненте списка получаем параметры для сортировки из локал стореджа - возможно не реактивно - попробовать добавить локальный стейт
  const { register, handleSubmit, watch, errors } = useForm();
  const currentSorting = localStorage.getItem("sortPerson");
  const dispatch = useDispatch();

  const setSort = value => {
    localStorage.setItem("sortPerson", JSON.stringify(value));
    dispatch(fetchPersonsListSortRequest(value));
  };
  let sort = {
    limit: 10,
    sortField: "name",
    sortDir: "asc"
  };
  if (currentSorting) {
    sort = JSON.parse(currentSorting);
    dispatch(fetchPersonsListSortRequest(sort));
    console.log(sort);
  }
  /*  else {
    const defaultSorting = {
      limit: 3,
      currentPage: 1,
      sortField: "name",
      sortDir: "asc"
    };

    localStorage.setItem("sortPerson", JSON.stringify(defaultSorting));
    //usePerson(defaultSorting);
  }  */

  return (
    <div>
      <form onChange={handleSubmit(setSort)}>
        <label htmlFor="limit">Limit</label>
        <select name="limit" ref={register} defaultValue={sort.limit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>

        <label htmlFor="sortDir">Sort direction</label>
        <select name="sortDir" ref={register} defaultValue={sort.sortDir}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>

        <label htmlFor="sortField">Sort field</label>
        <select name="sortField" ref={register} defaultValue={sort.sortField}>
          <option value="name">name</option>
          <option value="middlename">middlename</option>
          <option value="lastname">lastname</option>
        </select>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" ref={register} />
      </form>
    </div>
  );
};

export default Sorting;
