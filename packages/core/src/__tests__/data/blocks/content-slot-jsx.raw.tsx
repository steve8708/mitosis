import type { JSX } from '../../../../jsx-runtime';
import { Show, useStore, useDefaultProps, Slot } from '@builder.io/mitosis';

type Props = {
  [key: string]: string | JSX.Element;
};

export default function ContentSlotJsxCode(props: Props) {
  useDefaultProps({
    content: '',
    slotReference: undefined,
    slotContent: undefined,
  });

  const state = useStore({
    name: 'king',
    showContent: false,

    get cls() {
      return props.slotContent && props.children ? `${state.name}-content` : '';
    },

    show() {
      props.slotContent ? 1 : '';
    },
  });

  return (
    <Show when={props.slotReference}>
      <div
        name={props.slotContent ? 'name1' : 'name2'}
        title={props.slotContent ? 'title1' : 'title2'}
        {...props.attributes}
        className={props.slotContent ? `${state.name}-content` : ''}
        onClick={() => state.show()}
      >
        <Show when={state.showContent && props.slotContent}>
          <Slot name="content">{props.content}</Slot>
        </Show>
        <div>
          <hr />
        </div>
        <div>{props.children}</div>
      </div>
    </Show>
  );
}
