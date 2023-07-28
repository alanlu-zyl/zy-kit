import { $attrs, $if, buttonInput, buttonLabel, help, icon, inner, label, message, messages, outer, prefix, suffix, textInput, wrapper } from '@formkit/inputs'
import { type FormKitTypeDefinition } from '@formkit/core'

const floatingLabel: FormKitTypeDefinition = {
  schema: outer(
    wrapper(
      /*
       * Here we are commenting out the label input and moving it below the
       * text input.
       * label('$label'),
       */
      inner(
        icon('prefix', 'label'),
        prefix(),
        $attrs(
          {
            class: `formkit-input`,
            type: '$inputType || "text"',
          },
          textInput()
        ),
        /*
         * New label placemenet
         */
        $attrs(
          {
            class: `$classes.labelFloating`,
            'data-has-value': '$_value !== "" && $_value !== undefined',
            for: '$id',
          },
          label('$label')
        ),
        $if(
          '$showRightBtn',
          $attrs(
            {
              id: null,
              class: 'btn btn-type--flat r:0! h:full! {p:2x|6x}!.btn bl:1|G-20 min-w:100',
            },
            buttonInput(buttonLabel('$rightBtnText'))
          )
        ),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: ['inputType', 'showRightBtn', 'rightBtnText'],
  /**
   * Additional features that should be added to your input
   */
  features: [],
}

/**
 * Input definition for a text.
 * @public
 */
export const floatingLabelTextInput = floatingLabel
