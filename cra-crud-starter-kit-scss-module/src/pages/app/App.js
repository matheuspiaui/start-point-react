import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';

import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../actions/contact-actions';
import { newContact, saveContact, fetchContact, updateContact } from '../../actions/contact-actions';

import { SubmissionError } from 'redux-form';


// components
import ContactForm from '../../components/contact-form';


class App extends Component {

  state = {
    msg: ''
  }

  componentDidMount() {
    this.props.fetchContacts();
    console.log(this.props.contacts);

  }

  submit = (contact) => {
    if (!contact._id) {
      return this.props.saveContact(contact)
        .then(response => this.setState({ msg: 'Registrado' }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        })
    } else {
      return this.props.updateContact(contact)
        .then(response => this.setState({ msg: 'Erro' }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        })
    }
  }



  render() {

    return (
      <div className={style.app}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Welcome to React</h1>
        </header>
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
            </p>

        <h2>Lista de Contatos</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contacts.map(contact => {
                return (
                  <tr key={contact._id}>
                    <td>{contact.name.first}</td>
                    <td>{contact.name.last}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>
                      <button type="button" onClick={() => this.props.fetchContact(contact._id)}>
                        Edit
                            </button>
                    </td>
                    <td>
                      <button type="button" onClick={() => this.props.deleteContact(contact._id)}>
                        Delete
                            </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <button type="button" onClick={() => this.props.newContact()}>
          Novo
            </button>
        <ContactForm contact={this.props.contact} onSubmit={this.submit} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    contacts: state.contactStore.contacts,
    loading: state.contactStore.loading,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps,
  {
    fetchContacts,
    deleteContact,
    saveContact,
    fetchContact,
    newContact,
    updateContact,
  })(App);
