
import { Editor } from '../../components/editor';

const INSTALL_SDK_CODE = `
android install paypal-checkout-sdk-android
`;

const QUICK_START_CODE = `
paypal.Buttons().render();
`;

export const AndroidQuickStart = () => {
    return <>
        <h4>Quick Start</h4>
        <p>To quick start your Android integration, first install the Native Android SDK</p>
        <p>
            <Editor value={ INSTALL_SDK_CODE } language='sh' />
        </p>
        <p>Now copy and paste the following code into your app</p>
        <p>
            <Editor value={ QUICK_START_CODE } language='kotlin' />
        </p>
        <p>You can now view and click on the PayPal button in your Android app, and try clicking and checking out.</p>
    </>
}
