import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as phonedirActions from "../actions/phonedirAction";
import { connect } from "react-redux";

class PhoneDirectory extends Component {

    componentDidMount() {
      if(!('phonedir' in localStorage)) {
      localStorage.setItem('phonedir', JSON.stringify([]));
    }
      this.props.getPhoneDir();
    }

  render() {
    return (
      <div>
        <div className="ml-5 mt-3"><Link to="/addPhone"><button type="button" className="btn btn-primary">ADD</button></Link></div>
        <ul className="list-group mt-3">
            <li className="list-group-item mx-5"><strong className="mx-5">Name</strong><strong className="mx-5">Phone</strong></li>
            {this.props.phonedir.map((el,idx) => 
                <li className="list-group-item mx-5" key={idx}><span className="mx-5">{el.name}</span><span className="mx-5">{el.phone}</span>
                <button type="button" className="btn btn-danger" onClick={this.props.deletePhone(idx)}>DELETE</button></li>
                )}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  phonedir: state.phonedir.phonedir
})

export default connect(
  mapStateToProps,
  phonedirActions)(PhoneDirectory);
