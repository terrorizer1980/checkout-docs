
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-idle_fingers';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-java';

const FullEditor = ({ language = 'html', value, onChange }) => {
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

export default FullEditor;
