import { PropsWithChildren } from 'react';
import { buildPath, buildTag } from '../../__test__/apiDefinitionBuilder';
import { render, screen } from '@testing-library/react';
import ApiDefinitionPaths from './ApiDefinitionPaths';
import { AccordionElementProps } from '../AccordionElement/AccordionElement';
import { PathAccordionElementProps } from '../PathAccordionElement/PathAccordionElement';

let accordionElementProps: AccordionElementProps[] = [];
let pathAccordionElementProps: PathAccordionElementProps[] = [];

jest.mock(
  '../../../../components/organisms/AccordionElement/AccordionElement',
  () => (props: PropsWithChildren<AccordionElementProps>) => {
    accordionElementProps.push(props);
    return (
      <>
        <div>AccordionElementMock</div>
        <div>{props.children}</div>
      </>
    );
  },
);

jest.mock(
  '../PathAccordionElement/PathAccordionElement',
  () => (props: PathAccordionElementProps) => {
    pathAccordionElementProps.push(props);
    return <div>PathAccordionElementMock</div>;
  },
);

afterEach(() => {
  accordionElementProps.length = 0;
  pathAccordionElementProps.length = 0;
});

describe('When rendering', () => {
  it('should render accordion element with paths for each tag', () => {
    // given
    const tags = [buildTag({ name: 'pet' }), buildTag({ name: 'user' })];
    const paths = [
      buildPath({ name: '/pet', tags: ['pet'] }),
      buildPath({ name: '/user', tags: ['user'] }),
      buildPath({ name: '/user/login', tags: ['user'] }),
    ];

    // when
    render(<ApiDefinitionPaths paths={paths} tags={tags} />);

    // then
    expect(screen.getAllByText('AccordionElementMock').length).toBe(2);
    expect(accordionElementProps.map((props) => props.headline)).toEqual([
      'pet',
      'user',
    ]);

    expect(screen.getAllByText('PathAccordionElementMock').length).toBe(3);
    expect(pathAccordionElementProps.map((props) => props.path.name)).toEqual([
      '/pet',
      '/user',
      '/user/login',
    ]);
  });
});
