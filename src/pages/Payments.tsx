import React, {useState} from "react";
import WalletComponent from "../components/payments_components/WalletComponent";
import TransactionsHistory from "../components/payments_components/TransactionsHistory";
import PaymentsHistory from "../components/payments_components/PaymentsHistory";

const Payments = () => {
    let [tab, setTab] = useState<string>('Wallet');

    const getComponent = (): React.ReactElement | string => {
        switch (tab) {
            case 'Wallet':
                return <WalletComponent />;
            case 'Transaction History':
                return <TransactionsHistory/>;
            case 'Payment History':
                return <PaymentsHistory />
            default:
                return 'Please select a tab.';
        }
    }

    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30 mt-25">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 tabs--wrapper">
                        <h2 className={'font-weight--bold mb-30'}>{ tab }</h2>
                        <p className={'mb-0 top--tabs'}>
                            <a href="#" className={tab == 'Wallet' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('Wallet')}>Wallet</a>
                            <a href="#" className={tab == 'Transaction History' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('Transaction History')}>Transaction History</a>
                            <a href="#" className={tab == 'Payment History' ? 'active--tab': ''} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => setTab('Payment History')}>Payment History</a>
                        </p>
                        <div>
                            <span className="title__hr2"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    { getComponent() }
                </div>
            </div>
        </div>
    )
}

export default Payments;
