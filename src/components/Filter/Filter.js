import React from "react";
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from "../../redux/contacts";

import { Container, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <Container maxWidth="sm">
        <div>
    <label>
          <Input
            className={s.filterInput}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            type="text"
                    value={value}
                    placeholder="find contacts by name..."
            onChange={onChange}
        />
            </label>
            </div>
    </Container>
);
}


