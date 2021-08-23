import React from "react";
import "date-fns";
import { Box, Button, TextField } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  direction: {
    flexDirection: "column",
  },
  textFieldId: {
    width: 500,
    margin: 20,
    backgroundColor: "white",
  },
  checkBox: {
    paddingLeft: 0,
  },
  widthTextFieldText: {
    width: 500,
  },
}));

function Form({
  employee,
  handleInputChange,
  handleResetForm,
  handleSubmit,
  handleDateChange,
}) {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" p={5} flexDirection="column">
        <TextField
          label="Id"
          variant="outlined"
          type="number"
          name="id"
          value={employee.id}
          onChange={handleInputChange}
          className={classes.textFieldId}
        />
        <Box display="flex">
          <TextField
            label="Nom"
            variant="outlined"
            type="text"
            name="nom"
            value={employee.nom}
            onChange={handleInputChange}
            className={classes.textFieldId}
          />
          <TextField
            label="Prenom"
            variant="outlined"
            type="text"
            name="prenom"
            value={employee.prenom}
            onChange={handleInputChange}
            className={classes.textFieldId}
          />
        </Box>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <KeyboardDatePicker
          className={classes.textFieldId}
          margin="normal"
          label="Date de naissance"
          format="yyyy-MM-DD"
          value={employee.date}
          onChange={(event) => handleDateChange("date", event)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        {/* </MuiPickersUtilsProvider> */}
        <InputLabel
          className={classes.textFieldId}
          style={{ fontWeight: "bold" }}
          id="demo-simple-select-label"
        >
          {" "}
          Titre
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employee.titre}
          onChange={handleInputChange}
          displayEmpty
          name="titre"
          className={classes.textFieldId}
        >
          <MenuItem value="infographiste">Infographiste</MenuItem>
          <MenuItem value="programmeur">Programmeur</MenuItem>
          <MenuItem value="vendeur">Vendeur</MenuItem>
        </Select>

        <FormControl className={classes.textFieldId} component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="sex"
            value={employee.sex}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          className={classes.textFieldId}
          control={
            <Checkbox
              className={classes.checkBox}
              checked={employee.handicapee === true}
              onChange={handleInputChange}
              value={employee.handicapee}
              name="handicapee"
            />
          }
          label="handicapee"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleResetForm();
        }}
      >
        Effacer
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Envoyer
      </Button>
    </>
  );
}

export default Form;
