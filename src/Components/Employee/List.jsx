import React from "react";

function List({
  employeeList,
  handleInputChange,
  handleDeleteEmployee,
  handleModify,
}) {
  return (
    <table className="app-container">
      <thead>
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Date</th>
          <th>Titre</th>
          <th>Sex</th>
          <th>Handicapee</th>
          <th>Modifier</th>
          <th>Effacer</th>
        </tr>
      </thead>

      <tbody className="tbody">
        {employeeList.map((employee, index) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.nom}</td>
            <td>{employee.prenom}</td>
            <td>{employee.date}</td>
            <td>{employee.titre}</td>
            <td>{employee.sex}</td>
            <td>{employee.handicapee ? "oui" : "non"}</td>
            <td>
              <button onClick={() => handleModify(employee)}>Modifier</button>
            </td>
            <td>
              <button onClick={() => handleDeleteEmployee(employee.id)}>
                Effacer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
