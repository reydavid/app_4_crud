import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditContact extends Component {

  constructor(props) {
    super(props)

    this.onChangeContactWho = this.onChangeContactWho.bind(this);
    this.onChangeContactWhat = this.onChangeContactWhat.bind(this);
    this.onChangeContactWhen = this.onChangeContactWhen.bind(this);
    this.onChangeContactWhere = this.onChangeContactWhere.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      who: '',
      what: '',
      when: '',
      where: ''
    }

    console.log("props->", this.props)
  }

  componentDidMount() {
    axios.get('http://localhost:3500/api/contact/' + this.props.match.params.id)
      .then(res => {
        console.log(this.props)
        console.log(this.props)
        console.log("res ->", res)
        console.log("id ->", this.props.match.params.id)
        console.log("ddd")
        this.setState({
          who: res.data.data.who,
          what: res.data.data.what,
          when: res.data.data.when,
          where: res.data.data.where
        });
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeContactWho(e) {
    this.setState({ who: e.target.value })
  }

  onChangeContactWhat(e) {
    this.setState({ what: e.target.value })
  }

  onChangeContactWhen(e) {
    this.setState({ when: e.target.value })
  }

  onChangeContactWhere(e) {
    this.setState({ where: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const contactObject = {
      who: this.state.who,
      what: this.state.what,
      when: this.state.when,
      where: this.state.where
    };

    axios.put('http://localhost:3500/api/update-contact/' + this.props.match.params.id, contactObject)
      .then((res) => {
        console.log(res.data)
        console.log('Contact successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Contact List 
    this.props.history.push('/contact-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Who">
          <Form.Label>Who</Form.Label>
          <Form.Control type="text" value={this.state.who} onChange={this.onChangeContactWho} />
        </Form.Group>

        <Form.Group controlId="What">
          <Form.Label>What</Form.Label>
          <Form.Control type="text" value={this.state.what} onChange={this.onChangeContactWhat} />
        </Form.Group>

        <Form.Group controlId="When">
          <Form.Label>When</Form.Label>
          <Form.Control type="text" value={this.state.when} onChange={this.onChangeContactWhen} />
        </Form.Group>

        <Form.Group controlId="Where">
          <Form.Label>Where</Form.Label>
          <Form.Control type="text" value={this.state.where} onChange={this.onChangeContactWhere} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Contact
        </Button>
      </Form>
    </div>);
  }
}