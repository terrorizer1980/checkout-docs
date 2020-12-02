
import { Link } from '../components/router';

export const Intro = () => {
    return <>
        <h4>Introduction</h4>
        <p>
            PayPal Checkout with gives your buyers a simplified and secure checkout experience. PayPal intelligently presents the most relevant payment types to your shoppers, automatically, making it easier for them to complete their purchase using methods like Pay with Venmo, PayPal pay later offers, credit card payments, iDEAL, Bancontact, Sofort, and other payment types.
        </p>
        <h4>How to use these docs</h4>
        <p>
            Select your preferred options over on the right. Whether you're integrating PayPal on Web, iOS, or Android, using the PayPal SDK or APIs, these docs will automatically adjust to your preferences.
        </p>
        <h4>Next Steps</h4>
        <p>
            <Link to='quickstart'>Quick Start</Link> your integration
        </p>
    </>
}