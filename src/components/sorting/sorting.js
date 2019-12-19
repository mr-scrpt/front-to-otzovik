import React, { useEffect, useState } from "react";
import useForm from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { fetchPersonsListSortRequest } from "~m/persons";
const Sorting = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { serverSort } = useSelector(state => ({
    serverSort: state.persons.sort
  }));
  const [sort, setSort] = useState();

  useEffect(() => {
    console.log("mount");
    const localSort = localStorage.getItem("sortPerson");
    if (localSort) {
      setSort(JSON.parse(localSort));
      console.log("из локалсторедж");
    } else {
      setSort(serverSort);
      console.log("из сервера");
    }
  }, []);

  useEffect(() => {
    console.log("change", sort);
    dispatch(fetchPersonsListSortRequest(sort));
    //localStorage.setItem("sortPerson", JSON.stringify(sort));
  }, [sort]);

  const setSortForm = value => {
    console.log(value);
    setSort(value);
    localStorage.setItem("sortPerson", JSON.stringify(value));
  };
  if (sort) {
    return (
      <div>
        <form onChange={handleSubmit(setSortForm)}>
          <label htmlFor="limit">Limit {sort.limit}</label>
          <select name="limit" ref={register} defaultValue={sort.limit}>
            <option value="1">1</option>
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
  } else {
    return <div>Соритровка</div>;
  }
};

export default Sorting;
