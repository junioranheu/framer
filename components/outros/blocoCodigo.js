import { CopyBlock, tomorrowNight } from 'react-code-blocks';

// https://github.com/rajinwonderland/react-code-blocks
export default function BlocoCodigo({ code }) {
    return (
        <code>
            <CopyBlock
                text={code}
                language={'javascript'}
                showLineNumbers={false}
                startingLineNumber={0}
                theme={tomorrowNight}
                codeBlock
            />
        </code>
    );
}