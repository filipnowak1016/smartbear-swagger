import { buildParameter } from '../../__test__/apiDefinitionBuilder';
import { render, screen } from '@testing-library/react';
import ParametersDescriptionList from './ParametersDescriptionList';

describe('When rendering', () => {
  it('should render parameters list', () => {
    // given
    const parameters = [
      buildParameter({
        name: 'petId',
        description: 'ID of pet that needs to be updated',
        required: true,
        type: 'integer',
        format: 'int64',
      }),
      buildParameter({
        name: 'name',
        description: 'Updated name of the pet',
        required: false,
        type: 'string',
      }),
      buildParameter({
        name: 'status',
        description: 'Updated status of the pet',
        required: false,
        type: 'string',
      }),
    ];

    // when
    render(<ParametersDescriptionList parameters={parameters} />);

    // then
    expect(
      screen
        .getAllByTestId('parameter-dl-name')
        .map((element) => element.textContent),
    ).toEqual(['petId(required)', 'name', 'status']);

    expect(
      screen
        .getAllByTestId('parameter-dl-type')
        .map((element) => element.textContent),
    ).toEqual(['integer(int64)', 'string', 'string']);

    parameters.forEach((parameter) => {
      expect(screen.getByText(parameter.description)).toBeInTheDocument();
    });
  });
});
