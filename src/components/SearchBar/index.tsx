import { t } from "@utils/i18n";
import { debounce } from "lodash";
import { FormEventHandler, useEffect, useMemo, useRef } from "react";
import { SearchBarContainer, StyledSearchBar, StyledSearchForm } from "./styles";

interface SearchBarProps {
    onInput: FormEventHandler<HTMLInputElement>
}

const SearchBar = ({onInput}: SearchBarProps) => {
const barRef = useRef<HTMLInputElement>(null);
const debouncedInputHandler = useMemo(
    () => debounce((e) => {
        console.debug(e);
        e.persist();
        e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        onInput(e);
    }, 300)
  , [onInput])

  useEffect(() => {
    return () => {
        debouncedInputHandler.cancel();
    }
  })

  useEffect(() => {
      if (barRef.current) {
        const currParams = new URLSearchParams(window.location.search);
        const q = currParams.get('q');

        if (q) barRef.current.value = q;
    }
  }, [])

return <StyledSearchForm>
        <SearchBarContainer><StyledSearchBar type="text" placeholder={t("searchBar.placeholder")} onInput={debouncedInputHandler} ref={barRef} /></SearchBarContainer>
    </StyledSearchForm>
}

export default SearchBar;