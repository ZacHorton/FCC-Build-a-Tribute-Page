#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo 'Enter your username:'
read USERNAME

USER_ID=$($PSQL "SELECT user_id FROM users WHERE username = '$USERNAME'")

if [[ -z $USER_ID ]]
then
  echo Welcome, $USERNAME! It looks like this is your first time here.
  $PSQL "INSERT INTO users(username) VALUES('$USERNAME')" > /dev/null
  USER_ID=$($PSQL "SELECT user_id FROM users WHERE username = '$USERNAME'")
else
  GAMES_PLAYED=$($PSQL "SELECT COUNT(user_id) FROM games WHERE user_id = $USER_ID")
  BEST_GAME=$($PSQL "SELECT COALESCE(MIN(guesses), 0) FROM games WHERE user_id = $USER_ID")
  echo Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses.
fi

# Generate a random number between 1 and 1000
RANDOM_NUMBER=$((1 + RANDOM % 1000))
echo $RANDOM_NUMBER

echo 'Guess the secret number between 1 and 1000:'
read USER_GUESS

GUESSES=0
until [[ $USER_GUESS -eq $RANDOM_NUMBER ]]
do
  (( GUESSES++ ))
  if ! [[ $USER_GUESS =~ ^[0-9]$|^[1-9][0-9]*$ ]]
  then 
    echo 'That is not an integer, guess again:'
    read USER_GUESS
  elif [[ $USER_GUESS -lt $RANDOM_NUMBER ]]
  then 
    echo "It's higher than that, guess again:"
    read USER_GUESS
  elif [[ $USER_GUESS -gt $RANDOM_NUMBER ]]
  then
    echo "It's lower than that, guess again:"
    read USER_GUESS
  fi
done
(( GUESSES++ ))

if [[ $USER_GUESS -eq $RANDOM_NUMBER ]]
then
  $PSQL "INSERT INTO games(user_id, guesses) VALUES($USER_ID, $GUESSES)" > /dev/null
  echo You guessed it in $GUESSES tries. The secret number was $RANDOM_NUMBER. Nice job!
fi
