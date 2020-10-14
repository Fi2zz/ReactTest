import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";
export const Input = forwardRef(({ onChangeText, defaultValue }, ref) => {
  const input = useRef(null);
  const _onChange = ({ target }) => onChangeText(target.value);
  const _focus = () => input.current && input.current.focus();
  const _blur = () => input.current && input.current.blur();
  useImperativeHandle(ref, () => ({
    focus: _focus,
    blur: _blur,
    clear() {
      input.current.value = "";
      _onChange({ target: { value: "" } });
    },
  }));
  return (
    <input
      ref={input}
      defaultValue={defaultValue}
      placeholder="Placeholder"
      onChange={_onChange}
    />
  );
});

export function InputExample() {
  const _input = useRef(null);
  const getInput = () => _input.current;
  const _focus = () => getInput().focus();
  const _blur = () => getInput().blur();
  const _clear = () => getInput().clear();
  const [text, setText] = useState("");
  return (
    <>
      <h3>useImperativeHandle</h3>
      <Input ref={_input} onChangeText={setText} defalutValue={text}></Input>
      <div>
        <button onClick={_focus}>Focus</button>
        <button onClick={_blur}>Blur</button>
        <button onClick={_clear}>Clear</button>
      </div>
      <p>
        <i>Input Text:</i>
        {text}
      </p>
    </>
  );
}
