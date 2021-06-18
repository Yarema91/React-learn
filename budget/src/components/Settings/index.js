import { useContext, useMemo,  memo } from "react";
import { AppContext } from "../../providers/context";
import { useBooleanToggle } from '../../hooks';

const Test = memo(({ data }) => {
    console.log('rendering');
    return <div>{JSON.stringify(data)}</div>
})

const Setting = () => {
    const { state, dispatch } = useContext(AppContext);
    const { status, handleStatusChange } = useBooleanToggle();
    // const [isAdvensedSettingsShown, setIsAdvensedSettingsShown] = useState(false);
   



    const onChange = (e) => {
        const { value } = e.target;

        dispatch({
            type: 'changeCurrency',
            currency: value

        }
        )
    }
    const data = useMemo(() => [2], []);

    return (
        <>
            <h1>Налаштування</h1>
            <Test data={data} />
            <div>
                <form>
                    <label>
                        Валюта:
                    <select name='corrency'
                            onChange={onChange}
                            value={state.currency}>
                            <option value='UAH'>Гривня</option>
                            <option value='USD'>Долар</option>
                            <option value='EUR'>Євро</option>
                        </select>
                    </label>
                </form>
            </div>
            <div>
                <button onClick={handleStatusChange }>Розширенні налаштування</button>
                {status ? (
                <div>
                    <h2>Розширенні налаштування</h2>
                    <p>...</p>
                </div>
                ) : null}

            </div>
        </>
    )
}
export default Setting;