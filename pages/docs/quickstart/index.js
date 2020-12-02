
import { useModifiers } from '../../components/modifier'

import { WebQuickStart } from './web';
import { IOSQuickStart } from './ios';
import { AndroidQuickStart } from './android';

export const QuickStart = () => {
    const modifiers = useModifiers();

    if (modifiers.web) {
        return <WebQuickStart />
    }

    if (modifiers.ios) {
        return <IOSQuickStart />
    }

    if (modifiers.android) {
        return <AndroidQuickStart />
    }

    return null;
};
