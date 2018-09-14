import React from 'react';
import PropTypes from 'prop-types';
import HiddenInput from '../elements/HiddenInput';
import TextInput from '../elements/TextInput';
import FormButton from '../elements/Button';

const formId = 'projectForm';

class ItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.item;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleChange(value) {
    const { item } = this.state;

    this.setState({ ...item, ...value });
  }

  handleClick(e) {
    const { idx, callback } = this.props;

    e.preventDefault();

    let elements = [...document.getElementById(formId + '_' + idx).elements],
      data = {};

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value;

    callback(data);

    this.handleCancelEdit()
  }

  handleCancelEdit() {
    const { cancelEditCb } = this.props;
    cancelEditCb()
  }

  render() {

    const { idx, experience_id, itemType, buttonTitle } = this.props;

    return (
      <form key={idx} id={formId + '_' + idx}>
        <HiddenInput name="id" value={this.state.id} />
        <TextInput autocomplete="off"
          name="description"
          onChange={this.handleChange}
          placeholder={itemType}
          ref="description"
          type="text"
          value={this.state.description} />
        <HiddenInput name="experience_id" value={experience_id} />
        <div className="buttons">
          <FormButton
            callback={this.handleClick}
            buttonTitle={buttonTitle} />
          <FormButton
            callback={this.handleCancelEdit}
            buttonTitle="Cancel" />
        </div>
      </form>
    );
  }
}

export default ItemForm;
