
import dynamic from 'next/dynamic'

const FullEditor = dynamic(import('./editor'), { ssr: false });

export function Editor(props) {
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <FullEditor
            { ...props }
        />
    );
}