import Shape from './Shape/Shape';

const sx = {
    padding: '1em',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const Blocks = ({ kind, small }: { kind: 'dot' | 'square' | 'triangle' | 'penta' | 'hexa'; small?: boolean }) => {
    return {
        dot: (
            <div style={{ ...sx, backgroundColor: 'var(--bg)' }}>
                <Shape.Circle fill="var(--white)" size={small !== undefined && small === true ? 34 : 64} />
            </div>
        ),
        triangle: (
            <div style={{ ...sx, backgroundColor: 'var(--bg)' }} className="fx-bright">
                <Shape.Triangle fill="var(--white)" size={small !== undefined && small === true ? 34 : 64} />
            </div>
        ),
        square: (
            <div style={{ ...sx, backgroundColor: 'var(--bg-dark)' }}>
                <Shape.Square fill="var(--white)" size={small !== undefined && small === true ? 34 : 64} />
            </div>
        ),
        penta: (
            <div style={{ ...sx, backgroundColor: 'var(--bg-light)' }} className="fx-bright">
                <Shape sides={5} fill="var(--white)" size={small !== undefined && small === true ? 34 : 64} />
            </div>
        ),
        hexa: (
            <div style={{ ...sx, backgroundColor: 'var(--bg-dark)' }} className="fx-bright">
                <Shape sides={6} fill="var(--white)" size={small !== undefined && small === true ? 34 : 64} />
            </div>
        ),
    }[kind];
};

export default Blocks;
