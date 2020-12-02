
import { Editor } from '../../components/editor';

const QUICK_START_CODE = `
<script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
<script>paypal.Buttons().render('body');</script>
`;

export const WebQuickStart = () => {
    return <>
        <h4>Quick Start</h4>
        <p>To quick start your web integration, copy and paste the following code into your site</p>
        <p>
            <Editor value={ QUICK_START_CODE } language='html' />
        </p>
        <p>You can now view and click on the PayPal button in your web app, and try logging in.</p>
    </>
}
