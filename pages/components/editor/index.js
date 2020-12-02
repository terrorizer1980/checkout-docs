
import dynamic from 'next/dynamic'

const AceEditorPromise = import('react-ace');
const AceEditorThemePromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/theme-idle_fingers'));
const AceEditorHTMLPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-html'));
const AceEditorSwiftPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-swift'));
const AceEditorJavaScriptPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-javascript'));
const AceEditorShellPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-sh'));
const AceEditorKotlinPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-kotlin'));
const AceEditorJavaPromise = AceEditorPromise.then(() => import('ace-builds/src-noconflict/mode-java'));

const AceEditor = dynamic(AceEditorPromise, { ssr: false });

export function Editor({ language = 'html', value, onChange }) {
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <div>
            <AceEditor
                mode={ language }
                theme='idle_fingers'
                value={ value ? value.trim() : value }
                onChange={ onChange }
                showPrintMargin={ false }
                maxLines={ Infinity }
                width={ '100%' }
                wrapEnabled={ true }
                editorProps={ { $blockScrolling: Infinity } }
                onLoad={ editor => {
                    editor.renderer.setPadding(10, 10);
                    editor.renderer.setScrollMargin(10, 10);
                } }
                // eslint-disable-next-line react/forbid-component-props
                style={ { borderRadius: '5px' } }
            />
        </div>
    );
}