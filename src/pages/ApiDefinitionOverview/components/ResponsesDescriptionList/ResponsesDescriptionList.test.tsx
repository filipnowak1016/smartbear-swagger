import { buildResponse } from '../../__test__/apiDefinitionBuilder';
import { render, screen } from '@testing-library/react';
import ResponsesDescriptionList from './ResponsesDescriptionList';

describe('When rendering', () => {
  it('should render responses list', () => {
    // given
    const responses = [
      buildResponse({
        code: '200',
        description: 'successful operation',
      }),
      buildResponse({
        code: '404',
        description: 'Pet not found',
      }),
    ];

    // when
    render(<ResponsesDescriptionList responses={responses} />);

    // then
    responses.forEach((response) => {
      expect(screen.getByText(response.code)).toBeInTheDocument();
      expect(screen.getByText(response.description)).toBeInTheDocument();
    });
  });
});
