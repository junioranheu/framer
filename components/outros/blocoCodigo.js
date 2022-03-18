import { CopyBlock, tomorrowNight } from 'react-code-blocks';

export default function BlocoCodigo({ code }) {
    return (
        <CopyBlock
            text={code}
            language={'javascript'}
            showLineNumbers={false}
            startingLineNumber={0}
            theme={tomorrowNight}
            codeBlock
        />
    );
}