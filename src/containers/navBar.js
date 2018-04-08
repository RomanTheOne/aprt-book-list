import React, { Component } from 'react'
import DropDown from '../components/dropdown'
import { connect } from 'react-redux'

import { selectDropDownValue } from "../actions/actions";

import './navBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this._onDropDownChange = this._onDropDownChange.bind(this);
  }

  _onDropDownChange(event) {
    this.props.selectDropDownValue(parseInt(event.target.value))
  }

  render() {
    return(
      <div className='navBar'>
        <h1>Book Shelf</h1>
        <DropDown value={this.props.dropDownValue} onChange={this._onDropDownChange}/>
      </div>
    )
  }
}

const mapStateToProps = ({ dropDown }) => ({
  dropDownValue: dropDown,
});

const mapDispatchToProps = {
  selectDropDownValue,
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
