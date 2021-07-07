import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { StylesContext } from '@material-ui/styles';
// import { useForm } from 'react-hook-form'
import {TextField, Button, InputLabel} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 300,
        //   maxWidth: 'sm'
        },
    },
}));


const defaultFormValues = {
    imageUrl: '',
    name: '',
    count: '',
    size: {
        width: '',
        height: ''
    },
    weight: ''
};


const FormProduct = ({ addProd }) => {

    const [productInput, setProductInput] = useState(defaultFormValues)

    const classes = useStyles();

        //handleChange
    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setProductInput(productInput => ({ ...productInput, [name]: value }), [])
    );


    const handleSubmit = (e) => {

        //validation
        let isValide = (productInput.name !== '')
            && (productInput.count !== '') && (productInput.imageUrl !== '')
            && (productInput.width !== '') && (productInput.height !== '')
            && (productInput.weight !== '')

        if (isValide) {
            e.preventDefault()

            addProd(productInput)

            //close modal?

            setProductInput({
                imageUrl: '',
                name: '',
                count: '',
                width: '',
                height: '',
                weight: ''

            })
        } else {
            e.preventDefault()
            alert('error .. ')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" action="create-form" onSubmit={handleSubmit}>
                <div>
                    <TextField
                    autoFocus
                    margin="dense"
                        name='imageUrl'   //value
                        key="imageUrl"
                        type="text"
                        label="Photo"
                        variant="outlined"
                        placeholder='url address images'
                        value={productInput.imageUrl}
                        onChange={onChangeHandler}
                        onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    margin="dense"
                        key="name"
                        name='name'
                        type="text" text='name'
                        label="Name"
                        variant="outlined"
                        value={productInput.name}
                        onChange={onChangeHandler}
                        onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                     margin="dense"
                        type="number"
                        name='count'
                        text='name'
                        label="Count"
                        variant="outlined"
                        value={productInput.count}
                        onChange={onChangeHandler}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <InputLabel shrink>Size</InputLabel>
                <div>
                    <TextField
                     margin="dense"
                        type="number"
                        text='name'
                        name='width'
                        label='Width'
                        variant="outlined"
                        value={productInput.width}
                        onChange={onChangeHandler}
                        onKeyPress={handleKeyPress}
                    />
                    </div>
                <div>
                    <TextField
                     margin="dense"
                        type="number"
                        text='name'
                        name='height'
                        label='Height'
                        variant="outlined"
                        value={productInput.height}
                        onChange={onChangeHandler}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div>
                    <TextField
                     margin="dense"
                        type="number"
                        text='name'
                        name='weight'
                        label='Weight'
                        variant="outlined"
                        value={productInput.weight}
                        onChange={onChangeHandler}
                        htmlFor="component-error"
                    />
                </div>
            <button>Save</button>
                {/* <Button variant="contained" color="primary" >Save</Button> */}
        </form>
    )
}

export default FormProduct
