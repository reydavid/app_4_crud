import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ContactTableRow from './ContactTableRow';


export default class ContactList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      isLoading: false, 
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await axios.get('http://localhost:3500/api/contacts')
      .then(contacts => {
        this.setState({
          contacts: contacts.data.data,
          isLoading: false,
        });

        console.log(contacts)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.contacts.map((res, i) => {
      return <ContactTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table >
        <thead>
          <tr>
            <th>Who</th>
            <th>What</th>
            <th>When</th>
            <th>Where</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}