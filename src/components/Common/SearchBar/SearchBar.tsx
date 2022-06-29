import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  memo,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import { SvgIcon } from '@components/Common';
import * as Styled from './SearchBarStyle';

interface ISearchBarProps {
  placeholder: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchBar = memo((props: ISearchBarProps) => {
  const { setSearchValue, ...rest } = props;
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClearValue = () => {
    setValue('');
  };

  const handleEnterSubmitValue = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchValue(value);
    }
  };

  const handleSubmitValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchValue(value);
  };

  return (
    <Styled.SearchBarContainer>
      <Styled.SearchBarStyle
        {...rest}
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleEnterSubmitValue}
      />
      {value && (
        <Styled.SearchClearButton onClick={handleClearValue}>
          <SvgIcon type="clear" size={16} />
        </Styled.SearchClearButton>
      )}
      <Styled.SearchButton onClick={handleSubmitValue}>
        <SvgIcon type="search" size={18} />
      </Styled.SearchButton>
    </Styled.SearchBarContainer>
  );
});

export default SearchBar;
