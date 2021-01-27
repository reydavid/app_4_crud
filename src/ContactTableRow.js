import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ContactTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact() {
        axios.delete('http://localhost:3500/api/contact/' + this.props.obj._id)
            .then((res) => {
                console.log("id->", this.props.obj._id)
                console.log('Contact successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            window.location.reload()
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.who}</td>
                <td>{this.props.obj.what}</td>
                <td>{this.props.obj.where}</td>
                <td>{this.props.obj.when}</td>
                <td>
                    <Link className="edit-link" to={"/Update/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteContact} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}