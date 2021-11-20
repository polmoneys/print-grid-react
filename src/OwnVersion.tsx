import PrintGrid from './lib/PrintGrid';
import { Props } from './lib/types';

interface EnhancedProps extends Props {
    fill?: string;
}
const OwnVersion = (props: EnhancedProps) => {
    const { fill, ...rest } = props;
    return (
        <div
            {...(fill !== undefined && {
                style: {
                    backgroundColor: fill,
                },
            })}
        >
            <PrintGrid {...rest} />
        </div>
    );
};

export default OwnVersion;
