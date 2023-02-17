import React from "react";

const TransactionsComponent = ({transaction, index}: {transaction: any, index: number}) => {
    return (
        <div className="row mt-25">
            <table className={'table'}>
                <thead className="table-light">
                <tr>
                    <th>{transaction.date}</th>
                    {
                        index > 0 ? (<th colSpan={5}></th>) : (
                            <>
                                <th>Description</th>
                                <th>Payment Type</th>
                                <th>Amount</th>
                                <th>Balance</th>
                                <th>Date & Time</th>
                            </>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {
                    transaction.items.map((p: any) => {
                        return (
                            <tr key={p.id}>
                                <td>#{p.id}</td>
                                <td>{p.description}</td>
                                <td>{p.payment_type}</td>
                                <td style={{color: p.action == 'credit' ? 'green': 'red'}}>${p.amount.toFixed(2).toLocaleString()}</td>
                                <td>${p.balance.toFixed(2).toLocaleString()}</td>
                                <td>${p.time}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsComponent;
