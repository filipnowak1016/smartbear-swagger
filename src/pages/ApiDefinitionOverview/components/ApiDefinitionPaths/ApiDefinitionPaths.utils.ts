import { Path } from '../types/apiDefinition';

export const groupPathsByTag = (paths: Path[]) =>
  paths.reduce<Record<string, Path[]>>((result, path) => {
    path.tags.forEach((tag) => {
      result[tag] = result[tag] || [];
      result[tag].push(path);
    });
    return result;
  }, {});
