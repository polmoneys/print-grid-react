import { Fragment } from 'react';
import Blocks from './DemoBlocks';
import PrintGrid from './lib/PrintGrid';
import PrintGridRaw from './lib/PrintGridRaw';
import { PrintGridItemsProps } from './lib/types';
import OwnVersion from './OwnVersion';

const block = [<Blocks kind="dot" />, <Blocks kind="square" />, <Blocks kind="triangle" />, <Blocks kind="penta" />, <Blocks kind="hexa" />];
const blockSmall = [
    <Blocks small kind="dot" />,
    <Blocks small kind="square" />,
    <Blocks small kind="triangle" />,
    <Blocks small kind="penta" />,
    <Blocks small kind="hexa" />,
];

const bpP: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[0],
        x: [1, 4],
        y: [1, 3],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[1],
        x: [4, 13],
        y: [1, 3],
    },
    {
        id: '3',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[2],
        x: [1, 5],
        y: [3, 6],
    },
    {
        id: '4',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[3],
        x: [5, 9],
        y: [3, 6],
    },
    {
        id: '5',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[4],
        x: [9, 13],
        y: [3, 6],
    },
];
const bpL: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[0],
        x: [1, 7],
        y: [1, 3],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[1],
        x: [7, 13],
        y: [1, 3],
    },
    {
        id: '3',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[2],
        x: [1, 5],
        y: [3, 6],
    },
    {
        id: '4',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[3],
        x: [5, 9],
        y: [3, 6],
    },
    {
        id: '5',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[4],
        x: [9, 13],
        y: [3, 6],
    },
];

const A = () => {
    return <PrintGrid x={12} y={5} portrait={bpP} landscape={bpL} gap=".2em" />;
};

const bpPB: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[0],
        x: [1, 3],
        y: [1, 3],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[1],
        x: [1, 3],
        y: [3, 5],
    },
];

const bpLB: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[0],
        x: [1, 2],
        y: [1, 5],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: block[1],
        x: [2, 3],
        y: [1, 5],
    },
];

const B = () => {
    return <PrintGrid x={2} y={4} portrait={bpPB} landscape={bpLB} gap="1em" />;
};
const D = () => {
    return <OwnVersion x={2} y={4} portrait={bpPB} landscape={bpLB} gap="1em" fill="var(--shape-light)" />;
};

const E = () => {
    return <PrintGridRaw x={2} y={4} items={bpPB} gap="1em" />;
};

const bpPC: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[0],
        x: [1, 2],
        y: [1, 4],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [2, 3],
        y: [1, 5],
    },
    {
        id: '3',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[2],
        x: [3, 6],
        y: [1, 4],
    },
    {
        id: '4',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [1, 3],
        y: [5, 7],
    },
    {
        id: '5',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[2],
        x: [4, 6],
        y: [6, 7],
    },
    {
        id: '6',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[3],
        x: [1, 2],
        y: [4, 5],
    },
    {
        id: '7',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[4],
        x: [3, 6],
        y: [4, 6],
    },
    {
        id: '8',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [3, 4],
        y: [6, 7],
    },
];

const bpLC: PrintGridItemsProps = [
    {
        id: '1',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[0],
        x: [1, 4],
        y: [1, 3],
    },
    {
        id: '2',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [4, 6],
        y: [1, 3],
    },
    {
        id: '3',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[0],
        x: [4, 6],
        y: [3, 5],
    },
    {
        id: '4',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [1, 2],
        y: [3, 7],
    },
    {
        id: '5',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[2],
        x: [2, 4],
        y: [3, 5],
    },
    {
        id: '6',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[3],
        x: [2, 3],
        y: [5, 7],
    },
    {
        id: '7',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[4],
        x: [4, 6],
        y: [5, 7],
    },
    {
        id: '8',
        label: '🦊🦊🦊🦊🦊🦊',
        children: blockSmall[1],
        x: [3, 4],
        y: [5, 7],
    },
];

const C = () => {
    return <PrintGrid x={5} y={5} portrait={bpPC} landscape={bpLC} />;
};
const Demos = ({ kind, badge }: { kind: 'a' | 'b' | 'c' | 'd' | 'e'; badge: string }) => {
    return (
        <article>
            {/* <strong className="badge">{badge}</strong> */}
            {
                {
                    a: <A />,
                    b: <B />,
                    c: <C />,
                    d: <D />,
                    e: <E />,
                }[kind]
            }
        </article>
    );
};

export default Demos;
