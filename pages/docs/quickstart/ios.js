
import { Editor } from '../../components/editor';

const INSTALL_SDK_CODE = `
cocoapods install paypal-checkout-sdk-ios
`;

const QUICK_START_CODE = `
paypal.Buttons().render();
`;

export const IOSQuickStart = () => {
    return <>
        <h4>Quick Start</h4>
        <p>To quick start your iOS integration, first install the Native iOS SDK</p>
        <p>
            <Editor value={ INSTALL_SDK_CODE } language='sh' />
        </p>
        <p>Now copy and paste the following code into your app</p>
        <p>
            <Editor value={ QUICK_START_CODE } language='swift' />
        </p>
        <p>You can now view and click on the PayPal button in your iOS app, and try clicking and checking out.</p>
    </>
}
