# PrintGrid

If you work with art directors that come from print and do not appreciate the beauty of 'fill all available space' that CSS Flexbox provides this component might be what you need. 

Silly small, no strings attached, it works for 'everything' if you must, just double check is the best tool for the job at hand. 

## Get Started

Install it as node_module. 

```bash
npm i print-grid-react
```

Consume it as 'implementation detail' hidden behind your own design system api. 

```typescript

import PrintGrid, { Props } from 'print-grid-react';

interface EnhancedProps extends Props {
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

You'd use your `OwnVersion` in your codebase. 

## Props

Then, provide a surface to lay out the items, props ask for `x` and `y` and accepts `gap` to aide in the spacing between items. 

Once the surface is on your mind, provide `PrintGridItemsProps` to both props `landscape` and `portrait`. These props are a convenience method to filter based on the 'only mediaquery that makes sense **TM**' but you can use the `<PrintGridRaw>` that only has one `items` prop and you take the responsability of providing the right items on the right breakpoint. 

Prop `minY` adds a min height to each grid item so that you can avoid overlaps if content does not wrap. It defaults to `12vh`. 

Prop `debug` makes its visually easier to spot grids divisions. 

## Tips

The more precision you want the higher the `x` or `y` number. 

