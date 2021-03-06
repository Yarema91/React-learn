const Balance = ({balance}) => {
    return (
        <div>
           
            {balance  === 0 ? 'Only null' 
            : balance < 0 ? 'negative': 'positive'}
            {balance}
        </div>
    )
}
export default Balance;


