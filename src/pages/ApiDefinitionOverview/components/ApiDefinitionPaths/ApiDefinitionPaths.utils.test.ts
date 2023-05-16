import { groupPathsByTag } from './ApiDefinitionPaths.utils';
import { buildPath } from '../../__test__/apiDefinitionBuilder';

describe('groupPathsByTag', () => {
  it('should correctly group paths by tag', () => {
    // given
    const paths = [
      buildPath({ tags: ['user'] }),
      buildPath({ tags: ['store', 'user'] }),
      buildPath({ tags: ['user'] }),
    ];

    // when
    const result = groupPathsByTag(paths);

    // then
    expect(result).toEqual({
      user: paths,
      store: [paths[1]],
    });
  });
});
