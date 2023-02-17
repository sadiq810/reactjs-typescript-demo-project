import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {DateRangePicker, SelectPicker} from "rsuite";
import TransactionsComponent from "./components/TransactionsComponent";
import {loadTransactions} from "../../redux/actions";
import {userStateType} from "../../redux/reducers/UserReducer";
import {paymentStateType} from "../../redux/reducers/PaymentReducer";

const types = [{label: 'Mobile Money', value: 'Mobile Money'}, {label: 'Card', value: 'Card'}, {label: 'Bank Transfer', value: 'Bank Transfer'}];
const statuses = [{label: 'Credit', value: 'credit'}, {label: 'Debit', value: 'debit'}];
const methods = [{label: 'Deposit', value: 'Deposit'}, {label: 'Withdraw', value: 'Withdraw'}];


const TransactionsHistory = ({transactions, load, fetched}: any) => {
    const [type, setType] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [apply, setApply] = useState<boolean>(false);
    const [date, setDate] = useState<any>({start: '', end: ''});

    const dateHandler = (dates: any) => {
        let [start, end] = dates;

        if (start && end) {
            start = start.toISOString();
            start = start.split('T')[0];

            end = end.toISOString();
            end = end.split('T')[0];

            setDate({start, end});
        }
    }

    const loadData = () => {
        load({apply: !apply, type, method, status, date});
        setApply(!apply);
    }

    useEffect(() => {
        if (!fetched)
            load({});
    })
    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-30'}>Transactions History</h5>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <DateRangePicker placeholder={'Select dates'}  onChange={(dates) => dateHandler(dates)} style={{width: '100%'}}/>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 mt-4">
                                    <SelectPicker data={types} style={{ width: 300 }} value={type} onChange={(value) => setType(value)} placeholder={'Select type'}/>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 mt-4">
                                    <SelectPicker data={methods} style={{ width: 300 }} value={method} onChange={(value) => setMethod(value)} placeholder={'Select Method'}/>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 mt-4">
                                    <SelectPicker data={statuses} style={{ width: 300 }} value={status} onChange={(value) => setStatus(value)} placeholder={'Select Status'}/>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 mt-4">
                                    <button type={"button"} className={'btn btn-primary btn-sm m-auto'} style={{height: '36px'}} onClick={() => loadData()}>Apply</button>
                                </div>
                            </div>
                            <div className="row mt-40">
                                {
                                    transactions.map((transaction: any, index: number) => {
                                        return (<TransactionsComponent transaction={transaction} key={index} index={index}/>);
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        load: (payload: any) => dispatch(loadTransactions(payload)),
    }
}

const mapStateToProps = ({users, payments}: {users: userStateType, payments: paymentStateType}) => ({
    user: users.user,
    transactions: payments.transaction_history,
    loading: payments.isLoading,
    fetched: payments.fetched,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransactionsHistory));
