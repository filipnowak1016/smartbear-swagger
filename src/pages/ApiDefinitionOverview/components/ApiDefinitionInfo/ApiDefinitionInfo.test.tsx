import { buildInfo } from '../../__test__/apiDefinitionBuilder';
import { render, screen } from '@testing-library/react';
import ApiDefinitionInfo from './ApiDefinitionInfo';

describe('When rendering', () => {
  it('should render api definition info', () => {
    // given
    const info = buildInfo();

    // when
    render(<ApiDefinitionInfo info={info} />);

    // then
    expect(screen.getByText(info.title)).toBeInTheDocument();
    expect(screen.getByText(info.version)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(info.baseUrl))).toBeInTheDocument();
    expect(screen.getByText(info.description)).toBeInTheDocument();

    expect(
      screen.getAllByRole<HTMLAnchorElement>('link').map((link) => link.href),
    ).toEqual([
      info.termsOfService,
      `mailto:${info.contact.email}`,
      info.license.url,
    ]);
  });
});
