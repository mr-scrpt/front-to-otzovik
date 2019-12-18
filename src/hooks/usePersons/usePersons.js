import React, { useEffect, useState } from "react";

import {
  fetchPersonsListRequest,
  fetchPersonsListSortRequest
} from "~m/persons";
import { useDispatch, useSelector } from "react-redux";
const useRegions = () => {
  const [persons, setPersons] = useState([]);
  const { personsList, sort } = useSelector(state => ({
    personsList: state.persons.list.docs,
    sort: state.persons.sort
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPersonsListRequest(sort));
  }, []);
  useEffect(() => {
    dispatch(fetchPersonsListRequest(sort));
  }, [sort]);
  useEffect(() => {
    setPersons(personsList);
  }, [personsList]);

  return persons;
};

export default useRegions;
