# monty-hall-sim

The [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) is a non-intuitive example of probabilities at work. The "problem" is based on a game show (Let's Make a Deal) minigame:

* The host offers the contestant a choice between **3 doors**, only one of which contains a prize (usually a new car).
* Once the contestant chooses, the host **removes** one of the remaining doors, one that **does not** contain the prize.
* The contestant is offered a choice: **stay** with their first choice, or **switch** to the other remaining door.
* The prize is revealed and the contestant discoveres if they've won.

The question that the Monty Hall Problem poses is **"Is it better to switch or stay?"**

Mathematically, the better answer is to **switch**. This is non-intuitive, as you would presume that between the two doors, there's a 50% chance you chose the correct door. That, however, only consideres the last choice. When you factor both choices and the removal of an incorrect choice, the outcome favors switching at a 66% chance for winning.

* Initially, when you are choosing between three options, you have a 33.3% chance of choosing the correct door. This means that you will choose wrong two out of three times.
* Keeping that in mind, now an invalid choice is removed. Since you *most likely* chose an incorrect option initially, and the *other* incorrect option was removed, logically the correct answer must be the remaining door that you haven't chosen yet.

Simulations bear this out. Running a simulation of switching over a large sample set yields on average a 66% win rate, whereas staying yields a 33% win rate. 

This is a confusing result, as we tend to think of these choices as individual statistical events. Choosing between three doors is a 1 in 3 chance, and choosing between two is 1 in 2, right? Well, in this case we must consider these as a system of events with some non-random action providing us more information as the system evolves. The second choice is not the same as choosing between two random doors; statistically we can presume that we've chosen the wrong door, and by eliminating the *other* wrong result, we're left with the correct result.

## This Simulator

This simulator allows you to test this yourself. Play as many games as you want, switching and staying. The scoreboard will reflect your wins and losses. You can also simulate 100 switches or stays at a time.
