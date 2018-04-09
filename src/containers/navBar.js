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
        <h1>Release Plan</h1>
        <div className='dropDown'>
          <label>
            Load
            <DropDown value={this.props.dropDownValue} onChange={this._onDropDownChange}/>
            {this.props.dropDownValue === 1? 'Book' : 'Books'}
          </label>
        </div>
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
