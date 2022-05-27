import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
    axios.get('http://localhost:4000/person/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.date_of_birth}
          </td>
          <td>
            {this.props.obj.phone_number}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.bank_account_number}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;