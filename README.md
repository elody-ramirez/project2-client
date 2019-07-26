# NBA Fantasy Team Creator

## Link to Back End Repo
https://github.com/elody-ramirez/project2-back-end

## Technologies Used
- javascript
- JQuery
- html
- css
- bootstrap
- sass

## Planning
I planned to begin with authentication features to make sure a user can sign up,
sign in, change password and log out. Once that is working properly I will
make sure a user can view all available players in the Database but they won't
be able to add the user to their team through this feature. I will then make a
"Open Pack" feature will a user will essentially open a player back of cards,
which they can choose 1 to add to their team. After that they will also be able
to remove a player from their team.
## Development Process
I was able to go through things as planned, when I realized I had to implement
a feature for a user to be able to update a resource. This is when I made the
createdplayer resource in the back end and then made the functionality in the
front end.

After I had all the buttons and forms, I moved everything to handlebar files
to be able to separate my concerns. So I have a landing page, main menu page, my
player page, and my team page.

## Unsolved Problems
- When deleting a created player it needs to be removed from the player
database as well.

## Future Features
I want to be able to allow the user to have their myTeam face a random team,
where through a random number generator based off the difference of the two team
ratings, a user will know if their team beat or loss to the random team.
## WireFrames
https://imgur.com/gallery/pi53XAG

## User Stories
As a User I want to be able to log in.
As a User I want to be able to log out.
As a User I want to be able to change my password.
As a User I want to be able to see all players in the database.
As a User I want to be able to build a team of 3 players.
As a User I want to be able to remove players from my team.
As a User I want to be able to create my own custom player.
As a User I want to be able to update my created player's rating.
As a User I want to be able to delete my created player to make another.
As a User I want to be able to add my created player to my team of 3. 
