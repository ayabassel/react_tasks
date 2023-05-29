import React from 'react'
import { Card } from 'react-bootstrap'

export default function Result(props) {
    let { founded } = props;

    return (
        <div>
            <div className='col-sm-6 col-md-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{founded}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}