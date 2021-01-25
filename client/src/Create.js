import React, { Component } from 'react';
import { Button, FormGroup, Form } from 'reactstrap';
import axios from 'axios';

export class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            who: '',
            what: '',
            where: '',
            when: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeWho = this.onChangeWho.bind(this);
        this.onChangeWhat = this.onChangeWhat.bind(this);
        this.onChangeWhere = this.onChangeWhere.bind(this);
        this.onChangeWhen = this.onChangeWhen.bind(this);
    }
    onSubmit(e){
        e.preventDefault();

        const newCrud = {
            who: this.state.who,
            what: this.state.what,
            where: this.state.where,
            when: this.state.when
        };
        console.log("Submitted", e);
        axios.post('http://localhost:3001/add', newCrud)
            .then(res=>console.log(res.data));

        this.setState({
            who: '',
            what: '',
            where: '',
            when: ''
        })
    }
    onChangeWho(e){
        this.setState({
            who: e.target.value,
        })
    }
    onChangeWhat(e){
        this.setState({
            what: e.target.value,
        })
    }
    onChangeWhere(e){
        this.setState({
            where: e.target.value,
        })
    }
    onChangeWhen(e){
        this.setState({
            when: e.target.value,
        })
    }

    render(){
        return (
            <div className="form-group">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <div>
                            <label>Who</label>
                            <br></br>
                            <input id="who" type="text" value={this.state.who} onChange={this.onChangeWho}/>
                        </div>
                        <div>
                            <label>What</label>
                            <br></br>
                            <input id="What" type="text" value={this.state.what} onChange={this.onChangeWhat}/>
                        </div>
                        <div>
                            <label>Where</label>
                            <br></br>
                            <input id="where" type="text" value={this.state.where} onChange={this.onChangeWhere}/>
                        </div>
                        <div>
                            <label>When</label>
                            <br></br>
                            <input id="when" type="text" value={this.state.when} onChange={this.onChangeWhen}/>
                        </div>
                            <br></br>
                        <div>
                            <Button type="submit" color="danger">Create</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Create;