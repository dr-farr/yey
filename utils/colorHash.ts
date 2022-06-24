import tinycolor from 'tinycolor2';
import Prando from 'prando';
import { HexColour } from 'utils/colors';
import { useCallback, useState } from 'react';

export type FullColour = {
  main: HexColour;
  border: HexColour;
  hover: HexColour;
};

type ColourSet = Pick<FullColour, 'main' | 'border'>[];

const colours: ColourSet = [
  { main: '#BCBBFF', border: '#908EE4' },
  { main: '#C98AED', border: '#A162C5' },
  { main: '#8DD6EE', border: '#2BAED9' },
  { main: '#FAC990', border: '#FFA63E' },
  { main: '#BBEAB3', border: '#85BD7C' },
];

/**
 * Function that generates a unique and deterministic hex color from a string.
 * Use this with certain properties in the timeline component to get
 * colours for date range bars.
 *
 * This is done by using a fast psuedorandom generated with the group name
 * as a seed to select from a collection of predetermined colours.
 * forcePurple can be set as true to always select the first color
 * (in our case, brand purple) for display.
 *
 * This will return a main body color and a darker variant for borders.
 *
 * If the lighten prop is passed, the colours will be a shade lighter than the
 * originally determined hex. This is primarily useful for generating "child" items
 * for groups that need to be chromatically linked through sharing some original
 * seed value, but need to be distinguishable from one another.
 *
 * @param props
 */
export default function colorHash(props: {
  seed: string;
  lighten: boolean;
  forcePurple: boolean;
  optionalColours?: ColourSet;
}): FullColour {
  const colourSet = props?.optionalColours?.length > 0 ? props.optionalColours : colours;

  const prando = new Prando(props.seed);
  const color = props.forcePurple ? colours[0] : prando.nextArrayItem(colourSet);

  const colors = {
    main: color.main,
    border: color.border,
    hover: `#${tinycolor(color.main).darken(20).toHex()}` as HexColour,
  };
  if (props.lighten) {
    Object.entries(colors).forEach(([entry, col]) => {
      colors[entry] = `#${tinycolor(col).lighten(3).toHex()}`;
    });
  }
  return colors;
}

/**
 * Creates an infinite iterator over an array of colours
 * @param colors
 */
export function* createColourIterator(colors: ColourSet = colours) {
  let idx = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield colors[idx];
    if (idx >= colors.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
  }
}

/**
 * Cycles through provided colours and provides a getter against the iterator.
 * A reset function is provided to allow you to reset the iterator back to it's
 * initial state
 * @param coloursSet
 */
export function useColorCycle(coloursSet: ColourSet = colours) {
  const [iterator, setIterator] = useState(createColourIterator(coloursSet));

  const retrieveNext = useCallback(() => {
    const colours = iterator.next().value as Pick<FullColour, 'main' | 'border'>;
    return {
      ...colours,
      hover: `#${tinycolor(colours.main).darken(20).toHex()}` as HexColour,
    } as FullColour;
  }, [iterator]);

  const reset = useCallback(() => {
    setIterator(createColourIterator(coloursSet));
  }, [iterator]);

  return { retrieveNext, reset };
}
