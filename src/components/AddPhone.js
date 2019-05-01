import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as phonedirActions from "../actions/phonedirAction";
import { connect } from "react-redux";

class AddPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name2: '',
            phone2: ''
        }
        this.addPhone = this.addPhone.bind(this);
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    addPhone() {
        this.props.addPhone({name: this.state.name2, phone: this.state.phone2})
        this.props.history.push("/");
    }
  render() {
    return (
      <div>
          <div className="mt-2 ml-5">
        <Link to="/">BACK</Link></div>
        <div className="mt-4">
                <div className="form-group">
                <input className="form-control mx-5" placeholder="Name" type="text" value={this.state.name2} onChange={this.handleChange('name2')} />
                </div>
                <div className="form-group">
                <input className="form-control mx-5" placeholder="Phone" type="tel" maxLength="10" value={this.state.phone2} onChange={this.handleChange('phone2')} />
                </div>

                <div className="mt-3 ml-5">
                    <div className="subs-label"><strong>Subscriber to be added:</strong></div>
                    <div><span>Name:&nbsp; </span><span>{this.state.name2}</span></div>
                    <div><span>Phone:&nbsp; </span><span>{this.state.phone2}</span></div>
                </div>
                <input className="btn btn-secondary ml-5 mt-2" type="submit" value="ADD" onClick={this.addPhone} />
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    phonedir: state.phonedir.phonedir
})

export default connect(
    mapStateToProps,
    phonedirActions
)(withRouter(AddPhone));
