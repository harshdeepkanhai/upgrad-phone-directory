import React, { Component } from 'react';
import AddPhone from './AddPhone';
import { Link } from "react-router-dom";

class PhoneDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonedir: []
        }
    }

    componentDidMount() {
        this.setState({
            phonedir: JSON.parse(localStorage['phonedir'])
        })
    }

    deletePhone(idx) {
        let phonedir = JSON.parse(localStorage['phonedir']).filter((el,index) => index !==idx)
        this.setState({
            phonedir
        })
        localStorage.setItem('phonedir', JSON.stringify(phonedir));
    }

  render() {
    return (
      <div>
        <div className="ml-5 mt-3"><Link to="/addPhone" component={AddPhone}><button type="button" className="btn btn-primary">ADD</button></Link></div>
        <ul className="list-group mt-3">
            <li className="list-group-item mx-5"><strong className="mx-5">Name</strong><strong className="mx-5">Phone</strong></li>
            {this.state.phonedir.map((el,idx) => 
                <li className="list-group-item mx-5" key={idx}><span className="mx-5">{el.name}</span><span className="mx-5">{el.phone}</span>
                <button type="button" className="btn btn-danger" onClick={this.deletePhone(idx)}>DELETE</button></li>
                )}
        </ul>
      </div>
    )
  }
}

export default PhoneDirectory;
