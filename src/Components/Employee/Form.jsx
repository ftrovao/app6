import React from "react";

function Form({ employee, handleInputChange, handleResetForm, handleSubmit }) {
  return (
    <>
      <form id="form">
        <label>Id: </label>
        <input
          className="item"
          type="number"
          name="id"
          value={employee.id}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Nom: </label>
        <input
          className="item"
          type="text"
          name="nom"
          value={employee.nom}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Prenom: </label>
        <input
          className="item"
          type="text"
          name="prenom"
          value={employee.prenom}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Date Naissance: </label>
        <input
          className="item"
          type="date"
          name="date"
          value={employee.date}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Titre: </label>
        <select
          className="item"
          name="titre"
          value={employee.titre}
          onChange={handleInputChange}
        >
          <option value="" key="1">
            ...
          </option>
          <option value="infographiste" key="2">
            Infographiste
          </option>
          <option value="programmeur" key="3">
            Programmeur
          </option>
          <option value="vendeur" key="4">
            Vendeur
          </option>
        </select>
        <br />
        <br />
        <strong>Sex</strong> <br />
        <div>
          <input
            value="Homme"
            className="item"
            type="radio"
            name="sex"
            onChange={handleInputChange}
            checked={employee.sex === "Homme"}
          />
          Homme:
          <input
            value="Femme"
            className="item"
            type="radio"
            name="sex"
            onChange={handleInputChange}
            checked={employee.sex === "Femme"}
          />
          Femme:
        </div>
        <br />
        <label>Handicapee: </label>
        <input
          className="item"
          type="checkbox"
          name="handicapee"
          value={employee.handicapee}
          checked={employee.handicapee === true}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button
          onClick={() => {
            handleResetForm();
          }}
        >
          Effacer
        </button>
        <input
          type="button"
          value="envoyer"
          onClick={() => {
            handleSubmit();
          }}
        />
      </form>
    </>
  );
}

export default Form;
