import {
  buildParameter,
  buildPath,
  buildResponse,
} from '../../__test__/apiDefinitionBuilder';
import { render, screen } from '@testing-library/react';
import PathDetails from './PathDetails';

jest.mock(
  '../ParametersDescriptionList/ParametersDescriptionList',
  () => () => <div>ParametersDescriptionListMock</div>,
);

jest.mock('../ResponsesDescriptionList/ResponsesDescriptionList', () => () => (
  <div>ResponsesDescriptionListMock</div>
));

describe('When rendering', () => {
  it('should render full details', () => {
    // given
    const path = buildPath({
      description: 'Test description',
      responses: [buildResponse()],
      parameters: [buildParameter()],
    });

    // when
    render(<PathDetails path={path} />);

    // then
    expect(screen.getByText(path.description)).toBeInTheDocument();

    expect(screen.getByText('Parameters')).toBeInTheDocument();
    expect(
      screen.getByText('ParametersDescriptionListMock'),
    ).toBeInTheDocument();

    expect(screen.getByText('Responses')).toBeInTheDocument();
    expect(
      screen.getByText('ResponsesDescriptionListMock'),
    ).toBeInTheDocument();
  });

  it('should render without responses', () => {
    // given
    const path = buildPath({
      responses: [],
    });

    // when
    render(<PathDetails path={path} />);

    // then
    expect(screen.getByText('No responses')).toBeInTheDocument();
    expect(
      screen.queryByText('ResponsesDescriptionListMock'),
    ).not.toBeInTheDocument();
  });

  it('should render without parameters', () => {
    // given
    const path = buildPath({
      parameters: [],
    });

    // when
    render(<PathDetails path={path} />);

    // then
    expect(screen.getByText('No parameters')).toBeInTheDocument();
    expect(
      screen.queryByText('ParametersDescriptionListMock'),
    ).not.toBeInTheDocument();
  });
});
