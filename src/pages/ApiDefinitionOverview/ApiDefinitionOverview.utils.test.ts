import { buildApiDefinitionModel } from '../../api/apiDefinition/__test__/apiDefinitionModelBuilder';
import { mapApiDefinition } from './ApiDefinitionOverview.utils';
import { buildApiDefinition } from './__test__/apiDefinitionBuilder';

describe('mapApiDefinition', () => {
  it('should correctly map api definition', () => {
    // given
    const apiDefinitionModel = buildApiDefinitionModel();

    // when
    const result = mapApiDefinition(apiDefinitionModel);

    // then
    expect(result).toEqual(buildApiDefinition());
  });
});
