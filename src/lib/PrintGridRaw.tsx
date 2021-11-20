/**
 *
 * 2021. Pol Moneys
 * PrintGridRaw 1.0.0
 * Feedback at polmoneys on github
 *
 */

import { ElementType, useMemo } from 'react';
import { PropsRaw } from './types';

const isNil = (input: any) => input !== undefined;

const PrintGridRaw = (props: PropsRaw) => {
    const { as, className, items, gap, x, y, minY = '12vh', debug = true } = props;
    const Tag = as || ('div' as ElementType);

    const gridStyles = useMemo(() => {
        return {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: `repeat(${x}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${y}, minmax(0, ${minY}))`,
            gridGap: gap,
        };
    }, [gap, minY]);

    const gridItems = useMemo(() => {
        return items?.map((item) => {
            const { id, x, y, as, children, placement } = item;
            const itemStyles = {
                gridRow: `${y[0]}/ ${y[1]} `,
                gridColumn: `${x[0]}/ ${x[1]} `,
                width: '100%',
                height: '100%',
                display: 'grid',
                alignContent: isNil(placement) ? 'stretch' : placement,
                border: debug ? '1px solid rebeccapurple' : 'none',
            };
            const Tag = as || ('div' as ElementType);

            return (
                <Tag style={itemStyles} key={id}>
                    {children}
                </Tag>
            );
        });
    }, [debug]);
    return (
        <Tag className={isNil(className) ? '' : className} style={{ ...gridStyles }}>
            {gridItems}
        </Tag>
    );
};

export default PrintGridRaw;
