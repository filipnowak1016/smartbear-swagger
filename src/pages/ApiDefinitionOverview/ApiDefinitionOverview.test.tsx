import { render, screen } from '@testing-library/react';
import { ApiDefinitionOverview } from './index';
import { getApiDefinition } from '../../api/apiDefinition/apiDefinitionClient';
import { buildApiDefinitionModel } from '../../api/apiDefinition/__test__/apiDefinitionModelBuilder';

jest.mock('./components/ApiDefinitionInfo/ApiDefinitionInfo', () => () => (
  <div>ApiDefinitionInfoMock</div>
));
jest.mock('./components/ApiDefinitionPaths/ApiDefinitionPaths', () => () => (
  <div>ApiDefinitionPathsMock</div>
));
jest.mock('../../api/apiDefinition/apiDefinitionClient');

const getApiDefinitionMock = getApiDefinition as jest.Mock;

afterEach(() => {
  getApiDefinitionMock.mockReset();
});

describe('When rendering', () => {
  it('should render info and paths if data were loaded successfully', async () => {
    // given
    getApiDefinitionMock.mockResolvedValue(buildApiDefinitionModel());

    // when
    render(<ApiDefinitionOverview />);

    // then
    expect(
      await screen.findByText('ApiDefinitionInfoMock'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('ApiDefinitionPathsMock'),
    ).toBeInTheDocument();
  });

  it('should render error message if an error occurred while loading api definiton', async () => {
    // given
    getApiDefinitionMock.mockRejectedValue('error');

    // when
    render(<ApiDefinitionOverview />);

    // then
    expect(
      await screen.findByText('API Definition could not be loaded.'),
    ).toBeInTheDocument();
  });

  it('should render loader while loading api definition', async () => {
    // given
    getApiDefinitionMock.mockResolvedValue(buildApiDefinitionModel());

    // when
    render(<ApiDefinitionOverview />);

    // then
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // finish
    await screen.findByText('ApiDefinitionInfoMock');
  });
});
