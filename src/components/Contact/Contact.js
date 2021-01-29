import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstname: "",
        Lastname: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.formData.firstname} for submitting your form
          </p>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={this.state.formData.firstname}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label htmlFor="Lastname">Lastname</label>
            <input
              type="text"
              name="Lastname"
              value={this.state.formData.Lastname}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>

        <div>
          {this.state.formData.firstname}
          <br />
          {this.state.formData.Lastname}
        </div>
      </div>
    );
  }
}

export default Contact;
