import React from "react";
import Form from 'react-bootstrap/Form';

class BeastModal extends React.Component {
    render() {
        console.log(this.props.Beast);
        return (
            <>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One Horn</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="4">One Hundred Horns</option>
                </Form.Select>
            </>
        )
    }
}

export default BeastModal;












