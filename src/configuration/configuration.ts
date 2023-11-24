import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = `config/${process.env.CLIENT_INSTANCE}.yaml`
const back = join(__dirname,'../');
export default () => {
  return yaml.load(
    readFileSync(join(back, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};