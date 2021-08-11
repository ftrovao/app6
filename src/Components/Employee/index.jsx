import React, { useState } from "react";
import "./../../App.css";
import Form from "./Form";
import List from "./List";

function Index() {
  //========================
  // initialState comprend deux choses:
  // 1-objet vide;
  // 2-array avec 3 éléments pour initialiser la liste
  //========================
  const initialState = {
    //objet employee vide
    employee: {
      id: 0,
      nom: "",
      prenom: "",
      date: "",
      titre: "",
      sex: "",
      handicapee: false,
    },
    //liste avec 3 éléments
    employeeList: [
      {
        id: 1,
        nom: "Trovao",
        prenom: "Fernando",
        date: "2021-12-13",
        titre: "infographiste",
        sex: "Homme",
        handicapee: false,
      },
      {
        id: 2,
        nom: "Pierini",
        prenom: "Alex",
        date: "2021-08-01",
        titre: "programmeur",
        sex: "Homme",
        handicapee: false,
      },
      {
        id: 3,
        nom: "Silva",
        prenom: "Maria",
        date: "1970-01-01",
        titre: "vendeur",
        sex: "Femme",
        handicapee: true,
      },
    ],
  };
  //================= States ===================
  //On travaille avec deux etats:
  //1-état "employee" reçoit l'objet employee vide;
  //2-etat "employeeList" recoit l'array avec les 3 elements;

  const [employee, setEmployee] = useState(initialState.employee);
  const [employeeList, setEmployeeList] = useState(initialState.employeeList);
  //===========================================

  //================ Les fonctions ============

  //handleInputChange: recoit tous les changements dans le form;
  function handleInputChange(e) {
    //transformation du "id" recu comme string, en entier.
    const value =
      e.target.name === "id" ? parseInt(e.target.value) : e.target.value;
    //a chaque changement
    setEmployee({ ...employee, [e.target.name]: value });
  }

  function handleResetForm() {
    setEmployee(initialState.employee);
  }
  function handleSubmit() {
    const index = employeeList.findIndex((emp) => emp.id === employee.id);
    if (validateFields() && index === -1) {
      const newList = employeeList.concat(employee);
      setEmployeeList(newList);
      handleResetForm();
    } else if (validateFields() && index !== -1) {
      var draftEmployeeList = employeeList;
      draftEmployeeList.splice(index, 1, employee);
      setEmployeeList(draftEmployeeList);
      handleResetForm();
    }
  }

  /*==============*/
  function validateFields() {
    const validerChamp = [];

    for (const prop in employee) {
      if (employee[prop] === "" || employee.id === 0) {
        validerChamp.push(false);
      } else {
        validerChamp.push(true);
      }
    }

    if (validerChamp.includes(false)) {
      return false;
    } else {
      return true;
    }
  }

  function handleModify(employee) {
    setEmployee(employee);
  }

  function handleDeleteEmployee(id) {
    const newList = employeeList.filter(
      (employeeTemp) => employeeTemp.id !== id
    );
    setEmployeeList(newList);
  }

  function handleRadioChange(e) {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Form
        employee={employee}
        employeeList={employeeList}
        handleInputChange={handleInputChange}
        handleResetForm={handleResetForm}
        handleSubmit={handleSubmit}
      />
      <List
        employeeList={employeeList}
        handleInputChange={handleInputChange}
        handleDeleteEmployee={handleDeleteEmployee}
        handleRadioChange={handleRadioChange}
        handleModify={handleModify}
      />
    </>
  );
}
export default Index;
