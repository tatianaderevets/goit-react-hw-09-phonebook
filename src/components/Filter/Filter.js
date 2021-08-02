import React from "react";
import PropTypes from "prop-types";
import s from './Filter.module.css';
import { connect } from "react-redux";
import { contactsSelectors, changeFilter } from "../../redux/contacts";

import { Container, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Filter = ({ value, onChange }) => (
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


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
value: contactsSelectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(changeFilter(e.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);