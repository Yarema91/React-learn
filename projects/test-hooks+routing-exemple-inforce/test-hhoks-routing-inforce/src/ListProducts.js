import React,{ useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
    root: `
      background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
      border-radius: 3px;
      font-size: 16px;
      border: 0;
      color: white;
      height: 48px;
      padding: 0 30px;
      box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    `,
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


const ListProducts = ({ addProd }) => {

    const [productInput, setProductInput] = useState(defaultFormValues)

    const classes = useStyles();

    //handleChange
    const onChangeHandler = useCallback(
        ({target:{name,value}}) => setProductInput(productInput => ({ ...productInput, [name]:value }), [])
      );

      
    const handleSubmit = (e) => {

        //validation
        let isValide = (productInput.name !== '')
        &&(productInput.count !== '')&&(productInput.imageUrl !== '')
        &&(productInput.width !== '')&&(productInput.height !=='')
        &&(productInput.weight !== '')   

        if(isValide ){
            e.preventDefault()

            addProd(productInput)
            setProductInput({
                imageUrl: '',
                name: '',
                count: '',
                    width: '',
                    height: '',
                weight: ''
    
            })
        }else{
            e.preventDefault()
        alert('error .. ')}
    }


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }


    // console.log(productInput.imageUrl, productInput.name);

    return (
        <form action="create-form" onSubmit={handleSubmit}>
            <div>
                <div>
                    <span>Add photo</span>
                    <input
                        className='input'
                        name='imageUrl'
                        key="imageUrl"
                        type="text"
                        text='name'
                        placeholder='url address images'
                        // {...register('imageUrl')}
                        value={productInput.imageUrl}

                        onChange={onChangeHandler }
                        onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />
                     {/* <p> {errors.imageUrl?.message} </p> */}
                </div>
                <div><span>Name</span>
                    <input
                        key="name"
                        className='input'
                        name='name'
                        type="text" text='name'
                        placeholder='name'
                        value={productInput.name}
                        // {...register('name'), {required: true}}
                        onChange={onChangeHandler }
                        onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />

                </div>

                <div><span>Count</span>
                    <input
                        type="number"
                        className='input'
                        name='count'
                        text='name'
                        placeholder='count'
                        value={productInput.count}
                        onChange={onChangeHandler }
                        onKeyPress={handleKeyPress}
                    />
                </div>

                <div><span>Size</span>
                <input
                    type="number"
                    className='input'
                    text='name'
                    name='width'
                    placeholder='width'
                    value={productInput.width}
                    onChange={onChangeHandler}
                    onKeyPress={handleKeyPress}
                />
                <input type="number"
                    className='input'
                    text='name'
                    name='height'
                    placeholder='height'
                    value={productInput.height}
                    onChange={onChangeHandler}
                    onKeyPress={handleKeyPress}
                />
            </div>

                <div><span> Weight</span>
                <input
                    type="number"
                    className='input'
                    text='name'
                    name='weight'
                    placeholder='weight'
                    value={productInput.weight}
                    onChange={onChangeHandler}
                />
            </div>
            {/* <Button variant="contained" color="primary">Save </Button> */}
                <button>Save</button>
            </div>

        </form>
    )
}

export default ListProducts
