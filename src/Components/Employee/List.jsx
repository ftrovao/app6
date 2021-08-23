import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableWidth: {
    width: 500,
  },
}));

function List({
  employeeList,
  handleInputChange,
  handleDeleteEmployee,
  handleModify,
}) {
  const classes = useStyles();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          className={classes.width}
          size="small"
          aria-label="a dense table"
        >
          <TableHead color="primary">
            <TableRow>
              <TableCell size="small" variant="head">
                Id
              </TableCell>
              <TableCell size="small" variant="head">
                Nom
              </TableCell>
              <TableCell size="small" variant="head">
                Prenom
              </TableCell>
              <TableCell size="small" variant="head">
                Date
              </TableCell>
              <TableCell size="small" variant="head">
                Titre
              </TableCell>
              <TableCell size="small" variant="head">
                Sex
              </TableCell>
              <TableCell size="small" variant="head">
                Handicapee
              </TableCell>
              <TableCell size="small" variant="head"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employeeList.map((emp) => (
              <TableRow key={emp.id} hover>
                <TableCell size="small">{emp.id}</TableCell>
                <TableCell size="small">{emp.nom}</TableCell>
                <TableCell size="small">{emp.prenom}</TableCell>
                <TableCell size="small">{emp.date}</TableCell>
                <TableCell size="small">{emp.titre}</TableCell>
                <TableCell size="small">{emp.sex}</TableCell>
                <TableCell size="small">
                  {emp.handicapee ? "oui" : "non"}
                </TableCell>
                <TableCell size="small">
                  
                  <IconButton onClick={() => handleModify(emp)}>
                    <EditIcon color="secondary"></EditIcon>
                  </IconButton>

                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => handleDeleteEmployee(emp.id)}
                  >
                    <DeleteIcon>Effacer</DeleteIcon>
                  </IconButton>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default List;
