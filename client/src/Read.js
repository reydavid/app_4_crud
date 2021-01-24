import React, { Component } from 'react';
import {Table} from 'reactstrap';

export class Read extends Component {
    
    render(){
        return (
            <div>
                <Table size="sm" variant="dark">
                    <thead>
                        <tr>
hi                            {/* {this.state.name} */}
                        </tr>    
                    </thead>
                </Table>
            </div>
        )
    }
}

export default Read;