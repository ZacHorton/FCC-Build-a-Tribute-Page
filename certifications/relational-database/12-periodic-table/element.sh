#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ $# -ne 1 ]]
then
  echo "Please provide an element as an argument."
  exit
fi

INVALID_RESPONSE='I could not find that element in the database.'

# Check for a valid positive number then query elements.atomic_number
if [[ $1 =~ ^[1-9][0-9]*$ ]]
  then ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number = $1") 

# Check for one or two characters then query elements.symbol
elif [[ $1 =~ ^[A-Z]$|^[A-Z][a-zA-Z]$ ]]
  then ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol = '$1'") 

# Query name.symbol
else
  ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name = '$1'")
fi

if [[ -z $ATOMIC_NUMBER ]]
  then echo $INVALID_RESPONSE
else 
  SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number = $ATOMIC_NUMBER")
  NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number = $ATOMIC_NUMBER")
  ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties where atomic_number = $ATOMIC_NUMBER")
  MELTING_POINT_CELSIUS=$($PSQL "SELECT melting_point_celsius FROM properties where atomic_number = $ATOMIC_NUMBER")
  BOILING_POINT_CELSIUS=$($PSQL "SELECT boiling_point_celsius FROM properties where atomic_number = $ATOMIC_NUMBER")
  TYPE=$($PSQL "SELECT types.type FROM types LEFT JOIN properties on types.type_id = properties.type_id WHERE atomic_number = $ATOMIC_NUMBER")
  echo -e "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELSIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
fi

# You should delete the non existent element, whose atomic_number is 1000, from the two tables
# $PSQL "DELETE FROM properties WHERE atomic_number = 1000"
# $PSQL "DELETE FROM elements WHERE atomic_number = 1000"

# Your properties table should not have a type column
# $PSQL "ALTER TABLE properties DROP COLUMN type"
