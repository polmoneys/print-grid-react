import { CSSProperties, ReactElement, ReactNode } from 'react';

interface DefaultProps {
    /** subset of HTML tags */
    as?: 'section' | 'article' | 'nav' | 'aside' | 'header' | 'footer' | 'div';
    /** Base for composition */
    children: HTMLElement | ReactElement | ReactNode | Array<ReactNode> | string | null;
    /** Accepts utility string css class or styles from *.module.css */
    className?: string;
    /** Adds to 'root' element */
    id?: string;
    /** A11y can be multiple id "myBillingId myNameId" */
    ariaLabelledby?: string;
    /** Don't unless you must */
    discouragedStyle?: CSSProperties;
}

/**
 * Types css custom properties, TS complaints if
 * React.CSSProperties unless we broaden the typing.
 */
type CSSProps = {
    /** */
    [key: string]: string;
};

export interface Props extends Pick<DefaultProps, 'as' | 'id' | 'className'> {
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

export interface PropsRaw extends Pick<DefaultProps, 'as' | 'id' | 'className'> {
    /** Defaults to  0 max(5vw, 2rem);*/
    gap?: string;
    items: PrintGridItemsProps;
    /** 🚨 Divisions across X axis */
    x: number;
    /** 🚨 Divisions across Y axis */
    y: number;
    /** Assign min height to each slot item */
    minY?: string;
    debug?: boolean;
}

type DictNumber = Record<number, number>;

interface ActionItem extends Pick<DefaultProps, 'id' | 'children'> {
    disabled?: boolean;
    label: string | HTMLSpanElement;
    to?: string;
}

export interface PrintGridItemProps extends Partial<ActionItem> {
    /** grid-template-columns [start,end]*/
    x: DictNumber;
    /** grid-template-rows [start,end]*/
    // y: Record<number, number>;
    y: DictNumber;
    as?: 'div' | 'article' | 'aside';
    /** grid content alignment , defaults to stretch */
    placement?: 'end' | 'start' | 'stretch' | 'center';
}
export interface PrintGridItemsProps extends Array<PrintGridItemProps> {}
