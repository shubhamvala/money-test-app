import { } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { } from {};
import { } from {};
{camelCase name}}Slice, INITIAL_STATE} from './{{name}}.slice';
{name}}ReduxSelectionState, StoreStateWith{{name}} } from './types';

export const {{camelCase name}}Selector: Selector<
  StoreStateWith{{name}},
  {{name}}ReduxSelectionState
> = ({ {{name}} = INITIAL_STATE}) => {{name}};

const {
  actions: {},
} = {{camelCase name}}Slice;

export function use{{name}}Model() {
  const {} = useSelector<
    StoreStateWith{{name}},
     {{name}}ReduxSelectionState
  >( {{camelCase name}}Selector);
  const dispatch = useDispatch();

  

  return {};
}
