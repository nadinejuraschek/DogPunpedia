import { IList } from './types';

export const List = ({ list }: IList): JSX.Element => (
  <div className='results-list'>
    {list.map(
      (item: string, index: number): JSX.Element => (
        <div key={index}>{item}</div>
      )
    )}
  </div>
);
