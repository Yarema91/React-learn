import { useState } from "react";
import PropTypes from 'prop-types';
import {Wrapper, Row, Input, Button, Comment} from "./styles";

const Form = ( props ) => {
    const [form, setForm] = useState({
        value: [],
        date: new Date().toISOString().substring(0, 10),
        comment: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state, this.props);
        // debugger
        props.onChange(form);
        setForm({
            ...form,
            value: '',
            comment: ''
        })
    }

    const onChange = (e) => {
        const { value, name } = e.target;
      

        setForm({
            ...form,
            [name]: value
        })
    }

  
        return (
            <Wrapper>
                <form onSubmit={onSubmit}>
                    <Row>
                        <Input type="date"
                            name='date'
                            value={form.date}
                            onChange={onChange} />
                        <Input name='value'
                            type='number'
                            placeholder='Sum'
                            value={form.value}
                            onChange={onChange} />
                    </Row>
                    <Row>
                        <Comment name='comment'
                            value={form.comment}
                            onChange={onChange}
                        />
                        <Button>Save</Button>
                    </Row>
                </form>
            </Wrapper>
        )
    }


Form.propTypes = {
    onChange: PropTypes.func
};

export default Form;
