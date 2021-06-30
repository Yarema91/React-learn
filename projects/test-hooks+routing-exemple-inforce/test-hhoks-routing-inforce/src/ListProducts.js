import { useState, useCallback } from 'react';
// import { useForm } from 'react-hook-form'

const defaultFormValues = {
    imageUrl: '',
    name: '',
    count: null,
            size: {
                width: null,
                height: null
            },
    weight: null
};


const ListProducts = ({ addProd }) => {

    const [productInput, setProductInput] = useState(defaultFormValues)

    // const handleChangeUrl = (e) => {
    //     console.log(e.currentTarget.value);
    //     setProductInput( {url: e.currentTarget.value} )
    //     // setImageURLInput(e.currentTarget.value)
    //     // setnameInput(e.currentTarget.value)
    // }

    const onChangeHandler = useCallback(
        ({target:{name,value}}) => setProductInput(productInput => ({ ...productInput, [name]:value }), [])
      );

    const handleSubmit = (e) => {
        // console.log('1', productInput);
        e.preventDefault()
        addProd(productInput)
        setProductInput({
            imageUrl: '',
            name: '',
            count: '',
            size: {
                width: '',
                height: ''
            },
            weight: ''

        })
    }


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }


    // console.log('test', state);
    console.log(productInput.imageUrl, productInput.name);

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
                    {/* <input type="file" id="input" multiple  //download file
                    ></input> */}
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
                    {/* {errors.name && <p>{errors.name.messagge} This is required</p>} */}
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
                <button>Зберегти</button>
            </div>

        </form>
    )
}

export default ListProducts
