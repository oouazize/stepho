'use client';
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import TextField from '~/core/ui/TextField';
import { suggestRequest } from '~/lib/assets/queries';
import getSupabaseBrowserClient from '../supabase/browser-client';
import { Suggest } from '~/lib/assets/types/asset';
type Props = React.InputHTMLAttributes<unknown> & { defaultValue?: string };

const AutoSuggestInput = forwardRef<React.ElementRef<'input'>, Props>(
  function TextFieldInputComponent(
    { className, defaultValue = '', ...props },
    ref,
  ) {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<Suggest[] | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      const fetch = async () => {
        if (inputValue.length) {
          const client = getSupabaseBrowserClient();
          const data = await suggestRequest(client, inputValue);
          if (data) {
            setSuggestions(data);
            setShowSuggestions(true);
          }
        } else {
          setShowSuggestions(false);
        }
      };

      fetch();
    }, [inputValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion: Suggest) => {
      setInputValue(suggestion.id);
      setShowSuggestions(false);
    };

    return (
      <div>
        <TextField.Input
          onChange={handleInputChange}
          required
          {...props}
          ref={inputRef || ref}
          value={inputValue}
        />
        {showSuggestions && (
          <ul className="border-white/20 border rounded-md mt-1">
            {suggestions?.map((suggestion) => (
              <li
                className="hover:bg-primary hover:text-black p-2 cursor-pointer"
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name} ({suggestion.symbol})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

export default AutoSuggestInput;
