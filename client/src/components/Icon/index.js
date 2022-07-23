import backArrow from '../../assets/icons/backArrow.svg';
import book from '../../assets/icons/book.svg';
import hashtag from '../../assets/icons/hashtag.svg';
import list from '../../assets/icons/list-solid.svg';
import plus from '../../assets/icons/plus-solid.svg';
import redo from '../../assets/icons/redo.svg';
import singleItem from '../../assets/icons/single-item.svg';

export const Icon = ({ type }) => {
  switch (type) {
    case 'again':
      return <img className='again-icon' alt='try again' src={redo} />;
    case 'all':
      return <img className='all-icon' alt='show all' src={list} />;
    case 'back':
      return <img className='back' alt='puns' src={backArrow} />;
    case 'book':
      return <img alt='puns' src={book} />;
    case 'hashtags':
      return <img alt='hashtags' src={hashtag} />;
    case 'plus':
      return <img alt='puns' src={plus} />;
    case 'singleItem':
      return <img alt='puns' src={singleItem} />;
    default:
      return <img alt='puns' src={plus} />;
  };
};
