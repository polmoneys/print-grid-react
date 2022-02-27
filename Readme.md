# PrintGrid

If you work with art directors that come from 'print' and do not appreciate the beauty of 'fill all available space' that CSS Flexbox provides this component might be what you need. 

Silly small, no strings attached, it works for 'everything' if you must, just double check is the best tool for the job at hand. 

## Get Started

Install it as node_module. 

```bash
npm i print-grid-react
```

## Usage 

```typescript

import PrintGrid from 'print-grid-react';

interface PrintGridProps {
   /** Defaults to  0 max(5vw, 2rem);*/
    gap?: string;
   /** Array of SlotItemProps */
    portrait: PrintGridItemsProps;
    /** Array of SlotItemProps */
    landscape: PrintGridItemsProps;
    /** 🚨 Divisions across X axis */
    x: number;
    /** 🚨 Divisions across Y axis */
    y: number;
    /** Assign min height to each slot item */
    minY?: string;
    debug?: boolean;
}

const App = () => <PrintGrid x={12} y={5} gap="var(--gap-3)" portrait={itemsOnBreakpointPortrait} landscape={itemsOnBreakpointLandscape} />

```

Provide the amount of slots you need on both axis (`x`, `y`) and a `gap` to aide in the spacing between items. Each item will declare how it spands across the slots available. 

How do these items look like ?

```typescript

type DictNumber = Record<number, number>;

interface PrintGridItemProps {
    /** grid-template-columns [start,end]*/
    x: DictNumber;
    /** grid-template-rows [start,end]*/
    y: DictNumber;
    as?: 'div' | 'article' | 'aside';
    /** grid content alignment , defaults to stretch */
    placement?: 'end' | 'start' | 'stretch' | 'center';
}

interface PrintGridItemsProps extends Array<PrintGridItemProps> {}

```

Next  provide `PrintGridItemsProps` to both props `landscape` and `portrait`. These props are a convenience method to alter layout based on the only mediaquery that makes sense, `orientation`.

```typescript

// Content for demo purposes
const block = [<Blocks kind="dot" />, <Blocks kind="square" />, <Blocks kind="triangle" />, <Blocks kind="penta" />, <Blocks kind="hexa" />];

const breakpointPortrait: PrintGridItemsProps = [
    {
        id: '1',
        children: block[0],
        x: [1, 4],
        y: [1, 3],
    },
    {
        id: '2',
        children: block[1],
        x: [4, 13],
        y: [1, 3],
    },
    {
        id: '3',
        children: block[2],
        x: [1, 5],
        y: [3, 6],
    },
    {
        id: '4',
        children: block[3],
        x: [5, 9],
        y: [3, 6],
    },
    {
        id: '5',
        children: block[4],
        x: [9, 13],
        y: [3, 6],
    },
];
const breakpointLandscape: PrintGridItemsProps = [
    {
        id: '1',
        children: block[0],
        x: [1, 7],
        y: [1, 3],
    },
    {
        id: '2',
        children: block[1],
        x: [7, 13],
        y: [1, 3],
    },
    {
        id: '3',
        children: block[2],
        x: [1, 5],
        y: [3, 6],
    },
    {
        id: '4',
        children: block[3],
        x: [5, 9],
        y: [3, 6],
    },
    {
        id: '5',
        children: block[4],
        x: [9, 13],
        y: [3, 6],
    },
];

```

Note: if you want to take the responsability of providing the right items on a precise breakpoint import `<PrintGridRaw>`, has one `items` instead of `portrait`and `landscape`. 

## Tips

Consume it as 'implementation detail' hidden behind your own Design System `api`, you'd use `OwnVersion` in your code base. 


```typescript


interface EnhancedProps extends PrintGridProps {
    // Prop to taint background color of the grid
    fill?:string;
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

```

Prop `minY` adds a min height to each grid item so that you can avoid overlaps if content does not wrap. It defaults to `12vh`. 

The more precision you want the higher the `x` or `y` number. 

Prop `debug` makes its visually easier to spot grids divisions. 

## Inspiration 💐

> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.