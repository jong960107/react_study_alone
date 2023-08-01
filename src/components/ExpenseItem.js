import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <div className='expenseDate-wrapper'>
               <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__description'>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;